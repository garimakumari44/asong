import mongoose from 'mongoose';

// Type definition for global mongoose instance
const globalForMongoose = globalThis as unknown as {
  mongoose: {
    con: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
};

// Initialize or reuse existing connection
const cached = globalForMongoose.mongoose || { con: null, promise: null };

export async function connectDB() {
  if (cached.con) {
    return cached.con;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI!, {
      bufferCommands: false,
    });
  }

  try {
    cached.con = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  // Maintain the global instance in development
  if (process.env.NODE_ENV !== 'production') {
    globalForMongoose.mongoose = cached;
  }

  return cached.con;
}

export const db = cached.con!; // Non-null assertion after successful connection