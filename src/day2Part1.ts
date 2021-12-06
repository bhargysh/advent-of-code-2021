import * as fs from "fs";

fs.readFile("input/day2Data.txt", function (err, data) {
  if (err) throw err;

  const arr: string[] = data.toString().split("\n");
  var verticalDepth: number = 0;
  var horizontal: number = 0;
  var result: number = 0;

  for (var i = 0; i < arr.length; i++) {
    const [ command, count ] = arr[i].split(' ');

    if (command === 'forward') {
      horizontal += parseInt(count)
    } else if (command === 'down') {
      verticalDepth += parseInt(count)
    } else if (command === 'up' && verticalDepth >= 0) {
      verticalDepth -= parseInt(count)
    } else {
      console.log('Invalid command', command, '<-----')
    }
  }

  result = verticalDepth * horizontal
  console.log(result);
});
