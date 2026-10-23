import mongoose from "mongoose";
import dns from "dns";

export const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.error("MONGO_URI is not set in the environment");
    return;
  }

  // Retry connection up to 3 times with exponential backoff
  const MAX_RETRIES = 3;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      await mongoose.connect(mongoUri, {
        serverSelectionTimeoutMS: 10000, // 10s timeout
      });
      console.log("DB connected successfully to MongoDB Atlas");
      return; // success
    } catch (error) {
      console.error(`DB connection attempt ${attempt}/${MAX_RETRIES} failed:`, error.message || error);
      
      // If SRV lookup fails due to local DNS, fall back to Google/Cloudflare public DNS
      if (error && error.message && error.message.includes("querySrv")) {
        try {
          console.log("Setting fallback DNS servers (8.8.8.8, 1.1.1.1) for SRV resolution...");
          dns.setServers(["8.8.8.8", "1.1.1.1"]);
        } catch (dnsErr) {
          console.warn("Could not set custom DNS servers:", dnsErr.message);
        }
      }

      if (attempt < MAX_RETRIES) {
        const delay = attempt * 2000; // 2s, 4s backoff
        console.log(`Retrying in ${delay / 1000}s...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
  console.error("All DB connection attempts failed. Server will continue but DB operations will fail.");
};
