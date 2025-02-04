import dotenv from "dotenv";

dotenv.config();

export const SECRET: string = process.env.SECRET || "secret";
export const CLOUDINARY_API_KEY: string = process.env.CLOUDINARY_API_KEY || "";
export const CLOUDINARY_API_SECRET: string =
  process.env.CLOUDINARY_API_SECRET || "";
export const CLOUDINARY_CLOUD_NAME: string =
  process.env.CLOUDINARY_CLOUD_NAME || "";
export const DATABASE_URL: string = process.env.DATABASE_URL || "";
export const ZOHO_MAIL_USER: string =  process.env.ZOHO_MAIL_USER || "";
export const ZOHO_MAIL_PASS: string =  process.env.ZOHO_MAIL_PASS || "";