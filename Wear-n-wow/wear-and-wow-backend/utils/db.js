
// db/conn.js or config/db.js
const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ DB is not connected", error);
    throw error;
  }
};

module.exports = connectdb;
