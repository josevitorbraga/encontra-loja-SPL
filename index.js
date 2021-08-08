const express = require("express");
const got = require("got");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/api", async (req, res) => {
  // TODO: error handler
  const response = await got(
    "https://sites.madnezz.com.br/api/site/json/loja.asp?tipo=1&shopping_id=112&llj=true&full=true&jsoncallback=jQuery33103885199709465923_1626204202237&_=1626204202238"
  );
  const responseJSON = JSON.parse(response.body.slice(41, -1));

  res.json(responseJSON);
});

app.get("/api/search/:parameter", async (req, res) => {
  const { parameter } = req.params;
  const response = await got(
    `https://sites.madnezz.com.br/api/site/json/loja.asp?tipo=1&shopping_id=112&llj=true&filtro_nome=${parameter}&full=true`
  );
  res.send(response.body);
});

app.listen(3333, () => {
  console.log("Server sarted, port 333");
});

// https://sites.madnezz.com.br/api/site/json/loja.asp?tipo=1&shopping_id=112&llj=true&filtro_nome=biju&full=true&jsoncallback=?
