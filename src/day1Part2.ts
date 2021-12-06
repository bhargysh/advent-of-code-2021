import * as fs from "fs";

fs.readFile("input/day1Data.txt", function (err, data) {
  if (err) throw err;

  const arr: string[] = data.toString().split("\n");
  var result: string[] = [];

  for (var i = 0; i < arr.length; i++) {
    let current = parseInt(arr[i]);
    let next = arr[i + 1] && parseInt(arr[i + 1]);
    let nextOfNext = arr[i + 2] && parseInt(arr[i + 2]);
    let nextNextNext = arr[i + 1] && parseInt(arr[i + 3]);

    let firstSum = current + next + nextOfNext;
    let secondSum = next + nextOfNext + nextNextNext;

    if (!isNaN(firstSum) && !isNaN(secondSum)) {
      secondSum > firstSum
        ? result.push("increased")
        : result.push("decreased");
    }
  }

  const count = result.filter((str) => str == "increased").length;
  console.log(count);
});
