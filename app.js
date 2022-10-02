const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();

//statics
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/feedback", (req, res) => {
  res.render("feedback");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/menu", (req, res) => {
  const dish1 = {
    name: "Makemba, ndakala, makoso na legume",
    thumbnail: "img/african-dish-1.png",
    price: "$2.99",
  };
  const dish2 = {
    name: "Fufu, mbisi na matembele",
    thumbnail: "img/african-dish-2.jpg",
    price: "$1.99",
  };
  const list = [dish1, dish2, dish1, dish2];
  res.render("menu", { dishes: list });
});

app.listen(PORT, () => {
  console.info(`Listening on port ${PORT}`);
});
