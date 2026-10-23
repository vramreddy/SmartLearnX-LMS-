import mongoose from "mongoose";

export const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.error("MONGO_URI is not set in the environment");
    return;
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("DB connected successfully to MongoDB Atlas");
  } catch (error) {
    console.error("DB connection error:", error.message || error);
  }
};
