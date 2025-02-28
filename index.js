const express = require("express");
const app = express();

// Task 1: Create your views folder and add the correct files to it. 




// Task 2: Set the view engine to ejs.

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const data = {
    title: "Balenci Store",
    itemsOnSale: true,
    products: [
      { name: "Runners", sale: "10% off" },
      { name: "Handbag", sale: "5" },
      { name: "Tracks", sale: "15% off" }
    ]
  };
// Task 5: [CONTINUE TASKS IN store.ejs]

res.render("store.ejs", data);
});

app.listen(3000, () => {
  console.log("Balenci is runnin");
});