const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Import routes
const userRoutes = require("./router/userouter");

// Use routes
app.use("/users", userRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Inventory API is Running");
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "Server is healthy ✅" });
});

// 404 Middleware
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
