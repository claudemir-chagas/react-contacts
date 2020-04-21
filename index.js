const express = require("express");

const app = express();

app.get('/', (req, res) => {
      res.send("Schedule Sheila");
});

app.listen(3001)