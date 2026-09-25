import sharp from "sharp";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";

const R2_ACCOUNT_ID = "d098e896b8f7dc0403ad3a16f592dfe6";
const R2_ACCESS_KEY_ID = "f95b6dce449f4bb721ce54aa3b2f4e2b";
const R2_SECRET_ACCESS_KEY = "401cb76e46f0f908fcd78b5b2fbd75e92a4bbc1d26adbffbb3c37ef14fcc2ca1";
const R2_BUCKET_NAME = "chf-media";
const R2_PUBLIC_URL = "https://pub-ce8688bc6c654bcfb99716f7c9373bcd.r2.dev";

const client = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

async function main() {
  const screenshotPath = "/Users/shonkuweb/.gemini/antigravity/brain/11c68304-1d30-4114-b6de-7dd5235ee5c7/.user_uploaded/media_1789889952153.jpg";
  const outputDir = path.resolve("./public/images/products");
  fs.mkdirSync(outputDir, { recursive: true });

  const starPath = path.join(outputDir, "star-necklace.jpg");
  // In 500x1024:
  // Card 2 image is roughly left 260, top 425, width 224, height 210
  await sharp(screenshotPath)
    .extract({ left: 258, top: 423, width: 226, height: 212 })
    .jpeg({ quality: 95 })
    .toFile(starPath);

  console.log("Extracted star-necklace.jpg");

  const fileBuffer = fs.readFileSync(starPath);
  const key = "fab-creations/products/star-necklace.jpg";
  await client.send(
    new PutObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key,
      Body: fileBuffer,
      ContentType: "image/jpeg",
    })
  );
  console.log(`Uploaded to R2 -> ${R2_PUBLIC_URL}/${key}`);
}

main().catch(console.error);
