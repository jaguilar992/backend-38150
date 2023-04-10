import dotenv from "dotenv"
dotenv.config()

export const PORT = process.env.PORT || 8080;
export const BASE_URL = process.env.BASE_URL || "http://localhost:8080";
export const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/music";
export const SECRET = process.env.SECRET || "SECRET";
export const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 20;
export const S3_ACCESS_KEY = process.env.S3_ACCESS_KEY || '';
export const S3_SECRET_KEY = process.env.S3_SECRET_KEY || '';
export const S3_ENDPOINT = process.env.S3_ENDPOINT || '';
export const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME || '';
export const GMAIL_PASSWORD= process.env.GMAIL_PASSWORD || '';
export const MY_EMAIL_ADDRESS= process.env.MY_EMAIL_ADDRESS || '';
export const EMAIL_HOST= process.env.EMAIL_HOST || '';
export const EMAIL_PORT= Number(process.env.EMAIL_PORT) || 587;
export const OAUTH_CLIENT_ID = process.env.OAUTH_CLIENT_ID;
export const OAUTH_CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;

export const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
export const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID;
export const AUTH0_CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET;
export const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE;
