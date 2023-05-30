const http = require("http");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/").at(-1);
      console.log(id);
    }
  })
  .listen(3003, "localhost");
