const express = require("express");
const articleRouter = require("./routes/articles");
const app = express();

app.set("view engine", "ejs");

// jako vychozi route je nastaveno
// pro articles /articles (ne /)
app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test title 1",
      createdAt: new Date(),
      description: "Test description 1"
    },
    {
      title: "Test title 2",
      createdAt: new Date(),
      description: "Test description 2"
    }
  ];
  res.render("articles/index", { articles: articles });
});

app.listen(5000);
