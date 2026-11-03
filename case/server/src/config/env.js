import 'dotenv/config';
import {z} from 'zod';
const schema=z.object({NODE_ENV:z.enum(['development','test','production']).default('development'),PORT:z.coerce.number().default(5000),MONGODB_URI:z.string().min(1),CLIENT_ORIGIN:z.string().default('http://localhost:5173'),SPA_TIMEZONE:z.string().default('America/New_York'),BOOKING_WINDOW_DAYS:z.coerce.number().int().positive().default(30),STAFF_EMAIL:z.string().email().default('staff@example.com'),EMAIL_FROM:z.string().email().default('bookings@example.com')});
export const env=schema.parse(process.env);
