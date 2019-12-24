const { resolve } = require("path");
const fs = require("fs");
const download = require("download");

const inputText = fs.readFileSync(resolve(__dirname, "input.txt"), {
  encoding: "utf-8"
});
const list = inputText.split("\n");
const sleep = ms => new Promise(res => setTimeout(res, ms));

(async () => {
  for (let item of list) {
    try {
      await download(item, resolve(__dirname, "out"));
    } catch (e) {
      console.log(e, item);
    }
    await sleep(1000);
  }
})();
