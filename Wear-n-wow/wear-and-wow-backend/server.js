require('dotenv').config();
const express = require("express")
const router = require("./routes/auth-route")
const app = express()
const connectdb = require("./utils/db")





app.use(express.json())
app.use("/",router)

const PORT = 5000


const startServer = async () => {
  try {
    await connectdb();
    app.listen(PORT, () => {
        
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
  }
};

startServer();
