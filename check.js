const fetch = require("node-fetch");

fetch("https://api.ipify.org?format=json")
  .then(v => v.json())
  .then(console.log);
