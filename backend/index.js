const express = require("express");
const fs = require("fs") 
const cors = require("cors");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
require('dotenv').config(); // Load environment variables from .env file

app.use(cors());
app.use(express.json());

const routeFiles = fs.readdirSync("./routes");

// Dynamically load routes
routeFiles.forEach((file) => {
  const routePath = path.join(__dirname, "routes", file);
  console.log(routePath)
  app.use("/", require(routePath));
});

// Connect to MongoDB using the DB_URL environment variable
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB successfully!");
    app.listen(process.env.PORT || 8000, () => {
      console.log("The Server is running");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
