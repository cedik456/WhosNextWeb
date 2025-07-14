const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// Added helmet for strict http headers

app.use(helmet());

// routes

const authRoutes = require("./routes/authRoutes");
const sampleRoutes = require("./routes/sampleRoutes");
const adminRoutes = require("./routes/adminRoutes");

// route links

app.use("/api/auth/", authRoutes);
app.use("/api/sample/", sampleRoutes);
app.use("/api/admin/", adminRoutes);

// connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection Error: ", error);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.send("Backend Running");
});
