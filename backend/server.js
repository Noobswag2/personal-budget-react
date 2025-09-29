const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

const budget = [
  { title: "Rent", budget: 900 },
  { title: "Groceries", budget: 250 },
  { title: "Utilities", budget: 150 },
  { title: "Entertainment", budget: 100 },
  { title: "Savings", budget: 300 }
];

app.get("/budget", (req, res) => {
  res.json(budget);
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
