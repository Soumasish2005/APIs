const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const bookRoutes = require("./routes/v1/bookRoutes");

const app = express();
app.use(express.json());
connectDB();

app.use("/api/v1/books", bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
