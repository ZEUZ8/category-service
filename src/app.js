const express = require("express");
const categoryRoutes = require("./routes/categoryRoutes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/", categoryRoutes);

module.exports = app;
