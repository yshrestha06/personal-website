const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
// In dev this allows your local React app. In production, set FRONTEND_URL
// to your deployed site's exact origin (e.g. https://yashaswishrestha.com)
// so random sites can't submit to your contact form from a browser.
const allowedOrigin = process.env.FRONTEND_URL || "http://localhost:3000";
app.use(cors({ origin: allowedOrigin }));
app.use(express.json());

// Routes
app.use("/api/contacts", require("./routes/contactRoutes"));

app.get("/", (req, res) => {
  res.send("Contact API is running.");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err.message));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
