import fs from "fs";
import path from "path";

export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  metal: string;
  target: string;
  occasion: string;
  rating: number;
  reviewsCount: number;
  subtitle: string;
  featured: boolean;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  createdAt: string;
}

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerMobile: string;
  items: OrderItem[];
  subtotal: number;
  gst: number;
  shipping: number;
  total: number;
  status: "Pending" | "Confirmed" | "Dispatched" | "Delivered";
  createdAt: string;
}

export interface DatabaseData {
  products: Product[];
  categories: Category[];
  orders: Order[];
  adminPassword?: string;
}

const DB_DIR = process.env.DATABASE_DIR
  ? path.resolve(process.env.DATABASE_DIR)
  : path.resolve(process.cwd(), "data");
const DB_FILE = path.join(DB_DIR, "database.json");

const R2_BASE = "https://pub-ce8688bc6c654bcfb99716f7c9373bcd.r2.dev/vijay-jewellery";

// Initial Seed Data (starts empty with no default hardcoded data)
const defaultData: DatabaseData = {
  products: [],
  categories: [],
  orders: [],
};

// In-memory RAM cache & fast O(1) index maps for ultra-fast response
let cachedDb: DatabaseData | null = null;
const productIndex = new Map<string, Product>();
const categoryProductIndex = new Map<string, Product[]>();

function rebuildIndexes(data: DatabaseData): void {
  productIndex.clear();
  categoryProductIndex.clear();

  for (const product of data.products) {
    productIndex.set(product.id, product);
    const cat = (product.category || "uncategorized").toLowerCase().trim();
    const existing = categoryProductIndex.get(cat);
    if (existing) {
      existing.push(product);
    } else {
      categoryProductIndex.set(cat, [product]);
    }
  }
}

// Ensure database file exists and load into memory
function getDb(): DatabaseData {
  if (cachedDb) {
    return cachedDb;
  }

  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true, mode: 0o777 });
  }

  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify(defaultData, null, 2), "utf-8");
    cachedDb = { ...defaultData };
    rebuildIndexes(cachedDb);
    return cachedDb;
  }

  try {
    const raw = fs.readFileSync(DB_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    cachedDb = {
      products: Array.isArray(parsed.products) ? parsed.products : [],
      categories: Array.isArray(parsed.categories) ? parsed.categories : [],
      orders: Array.isArray(parsed.orders) ? parsed.orders : [],
      adminPassword: typeof parsed.adminPassword === "string" ? parsed.adminPassword : undefined,
    };
    rebuildIndexes(cachedDb);
    return cachedDb;
  } catch {
    cachedDb = {
      products: [],
      categories: [],
      orders: [],
    };
    rebuildIndexes(cachedDb);
    return cachedDb;
  }
}

function saveDb(data: DatabaseData): void {
  // Update RAM cache immediately for 0ms read and consistency
  cachedDb = data;
  rebuildIndexes(data);
  try {
    if (!fs.existsSync(DB_DIR)) {
      fs.mkdirSync(DB_DIR, { recursive: true, mode: 0o777 });
    }
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error(`[DB Error] Failed to write database to ${DB_FILE}:`, err);
    // Attempt permission fix and retry once
    try {
      if (fs.existsSync(DB_FILE)) {
        fs.chmodSync(DB_FILE, 0o666);
      }
      fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), "utf-8");
    } catch (retryErr) {
      console.warn(`[DB Warning] Retained changes in RAM cache due to disk write issue:`, retryErr);
      // Do not re-throw error so the user request (checkout/product save) still succeeds smoothly
    }
  }
}

// ---------------- PRODUCTS ----------------
export function getProducts(category?: string): Product[] {
  const db = getDb();
  if (category) {
    return categoryProductIndex.get(category.toLowerCase().trim()) || [];
  }
  return db.products;
}

export function getProductById(id: string): Product | undefined {
  getDb();
  return productIndex.get(id);
}

export function createProduct(productData: Omit<Product, "id" | "createdAt">): Product {
  const db = getDb();
  const newProduct: Product = {
    ...productData,
    id: `prod-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  db.products.unshift(newProduct);
  saveDb(db);
  return newProduct;
}

export function updateProduct(id: string, updates: Partial<Product>): Product | null {
  const db = getDb();
  const index = db.products.findIndex((p) => p.id === id);
  if (index === -1) return null;

  db.products[index] = { ...db.products[index], ...updates };
  saveDb(db);
  return db.products[index];
}

export function deleteProduct(id: string): boolean {
  const db = getDb();
  const initialLength = db.products.length;
  db.products = db.products.filter((p) => p.id !== id);
  if (db.products.length !== initialLength) {
    saveDb(db);
    return true;
  }
  return false;
}

// ---------------- CATEGORIES ----------------
export function getCategories(): Category[] {
  return getDb().categories;
}

export function createCategory(name: string): Category {
  const db = getDb();
  const trimmed = name.trim();
  const existing = db.categories.find(
    (c) => c.name.toLowerCase() === trimmed.toLowerCase()
  );
  if (existing) {
    return existing;
  }

  const newCategory: Category = {
    id: `cat-${Date.now()}`,
    name: trimmed,
    createdAt: new Date().toISOString(),
  };
  db.categories.push(newCategory);
  saveDb(db);
  return newCategory;
}

export function deleteCategory(id: string): boolean {
  const db = getDb();
  const initialLength = db.categories.length;
  db.categories = db.categories.filter((c) => c.id !== id);
  if (db.categories.length !== initialLength) {
    saveDb(db);
    return true;
  }
  return false;
}

// ---------------- ORDERS ----------------
export function getOrders(): Order[] {
  return getDb().orders;
}

export function createOrder(orderData: Omit<Order, "id" | "orderNumber" | "createdAt">): Order {
  const db = getDb();
  const orderNumber = `VJ-${1000 + db.orders.length + 1}`;
  const newOrder: Order = {
    ...orderData,
    id: `ord-${Date.now()}`,
    orderNumber,
    createdAt: new Date().toISOString(),
  };
  db.orders.unshift(newOrder);
  saveDb(db);
  return newOrder;
}

export function updateOrderStatus(
  id: string,
  status: "Pending" | "Confirmed" | "Dispatched" | "Delivered"
): Order | null {
  const db = getDb();
  const order = db.orders.find((o) => o.id === id);
  if (!order) return null;

  order.status = status;
  saveDb(db);
  return order;
}

export function deleteOrder(id: string): boolean {
  const db = getDb();
  const initialLength = db.orders.length;
  db.orders = db.orders.filter((o) => o.id !== id);
  if (db.orders.length !== initialLength) {
    saveDb(db);
    return true;
  }
  return false;
}

export function getAdminPassword(): string {
  const db = getDb();
  return db.adminPassword || process.env.ADMIN_PASSWORD || "admin@vijay2026";
}

export function setAdminPassword(newPassword: string): void {
  const db = getDb();
  db.adminPassword = newPassword;
  saveDb(db);
}

// Eagerly pre-warm in-memory cache on application boot for 0ms first-load latency
try {
  getDb();
} catch {
  // Graceful fallback during build phase if environment is sandboxed
}


