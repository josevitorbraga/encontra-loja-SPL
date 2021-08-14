const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const port = process.env.PORT;

const got = require("got");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/api", async (req, res) => {
  // TODO: error handler
  const response = await got(
    "https://sites.madnezz.com.br/api/site/json/loja.asp?tipo=1&shopping_id=112&llj=true&full=true&jsoncallback=jQuery33103885199709465923_1626204202237&_=1626204202238"
  );
  const responseJSON = JSON.parse(response.body.slice(41, -1));

  res.json(responseJSON);
});
app.get("/api/alimentacao", async (req, res) => {
  const response = await got(
    "https://sites.madnezz.com.br/api/site/json/loja.asp?tipo=2,5&shopping_id=112&llj=true&full=true&jsoncallback=jQuery331000835263050803936_1628642801119&_=1628642801120"
  );
  const responseJSON = JSON.parse(response.body.slice(42, -1));

  res.json(responseJSON);
});

app.get("/api/search/:parameter", async (req, res) => {
  const { parameter } = req.params;
  const response = await got(
    `https://sites.madnezz.com.br/api/site/json/loja.asp?tipo=1&shopping_id=112&llj=true&filtro_nome=${parameter}&full=true`
  );
  if (response.body === "[]") {
    const secondResponse = await got(
      `https://sites.madnezz.com.br/api/site/json/loja.asp?tipo=2,5&shopping_id=112&llj=true&filtro_nome=${parameter}&full=true`
    );
    res.send(secondResponse.body);
  } else {
    res.send(response.body);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT || 3333, () => {
  console.log("Server sarted, port 333");
});
