import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID || "d098e896b8f7dc0403ad3a16f592dfe6";
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID || "f95b6dce449f4bb721ce54aa3b2f4e2b";
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY || "401cb76e46f0f908fcd78b5b2fbd75e92a4bbc1d26adbffbb3c37ef14fcc2ca1";
export const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME || "chf-media";
export const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL || "https://pub-ce8688bc6c654bcfb99716f7c9373bcd.r2.dev";

export const r2Client = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

export async function uploadToR2(
  fileBuffer: Buffer,
  key: string,
  contentType: string
): Promise<string> {
  const command = new PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: key,
    Body: fileBuffer,
    ContentType: contentType,
    CacheControl: "public, max-age=31536000, immutable",
  });

  await r2Client.send(command);
  return `${R2_PUBLIC_URL}/${key}`;
}

export function getR2PublicUrl(key: string): string {
  return `${R2_PUBLIC_URL}/${key}`;
}
