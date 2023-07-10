require("dotenv").config();
const connectDB = require("./database/connect");
const cors = require("cors");
const express = require("express");
const app = express();
const useRoutes = require('./routes/user')
const PORT = process.env.PORT || 3000;

///Middleware
app.use(cors());
app.use(express.json())
app.use('/api',useRoutes)

connectDB();

app.listen(PORT, () => {
  console.log("Listening");
});

//Routes
app.get("/", (req, res) => {
  res.json({
    text: "Welcome to my API server",
  });
});
