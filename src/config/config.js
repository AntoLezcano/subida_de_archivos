import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 4000;
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || "dabqo6uzf";
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || "658238554813149";
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || "4cp358sF54FonQqZA38XV8N90AA";
