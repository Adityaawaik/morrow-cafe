const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const claimRoute = require("./routes/claimRoute");

dotenv.config();

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(claimRoute);
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: "Internal server error.",
  });
});

const PORT = 3000;
app.listen(PORT, console.log("server started"));
