const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ credentials: true, origins: "http://localhost:5000" }));

app.use("/users", require("./routes/userRoute"));

app.listen(port, () =>
  console.log(`Server started on port ${port}`.black.bgCyan.italic)
);
