const express = require("express");
const authRoutes = require("./routes/auth");
const app = express();
const port = 3030;
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(
  cors()
);

app.use(express.json());

app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
