const express = require("express");
const path = require("path");

const app = express();

// força caminho absoluto
const publicPath = path.join(__dirname, "public");
console.log("Serving static from:", publicPath);

app.use(express.static(publicPath));

app.get("/health", (req, res) => {
  res.send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Running on port", PORT);
});
