// lib/mongodb.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
   throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

/**
 * Global cache for MongoDB connection to avoid multiple connections.
 */
let cached = global?.mongoose;

if (!cached) {
   cached = global?.mongoose = { conn: null, promise: null };
}

async function connectToDatabase(): Promise<typeof mongoose> {
   if (cached.conn) {
      return cached.conn;
   }

   if (!cached.promise) {
      cached.promise = mongoose
         .connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
         })
         .then((mongoose) => mongoose);
   }
   cached.conn = await cached.promise;
   return cached.conn;
}

export default connectToDatabase;
