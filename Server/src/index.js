const http = require("http");
const data = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/").at(-1);
      const foundCharacter = data.find((char) => {
        return char.id === +id;
      });

      res.writeHead(200, { "content-type": "application/json" });
      return res.end(JSON.stringify(foundCharacter));
    }
  })
  .listen(3001, "localhost");
