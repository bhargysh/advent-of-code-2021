import * as fs from "fs";

fs.readFile("input/day1Data.txt", function (err, data) {
  if (err) throw err;

  const arr: string[] = data.toString().split("\n");
  var result: string[] = [];

  arr.forEach(function(item, index, array) {
    let current = parseInt(item);
    let next = parseInt(array[index + 1]);

    next > current ? result.push("increased") : result.push("decreased");
  })

  const count = result.filter((str) => str == "increased").length;

  console.log(count);
});
