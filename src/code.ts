import * as fs from "fs";

fs.readFile("input/test.txt", function (err, data) {
  if (err) throw err;

  const arr: string[] = data.toString().split("\n");
  let result: number = 0;
  var myMap = new Map<number, number[]>();

  for (var i = 0; i < arr.length; i++) {
    const chars = arr[i].split('');
    for (var j = 0; j < chars.length; j++) {
      console.log("CHAR", chars[j]);
      if (chars[j] === '0' && myMap.get(j)) {
        myMap.set(j, myMap.get(j).concat(0))
      } else if ((chars[j] === '1' && myMap.get(j))) {
        myMap.set(j, myMap.get(j).concat(1))
      } else if (chars[j] === '0') {
        myMap.set(j, [0])
      } else {
        myMap.set(j, [1])
      }
    }
  }

  console.log("FINAL", myMap);
});

/*
const prefixes = {}
const scores = []
let col
for (let i = 0, prefix; i < input.length; ++i) {
  const chr = input[i]
  if (chr === LF) {
    prefix = ''
    col = 0
  }
  else {
    const score = scores[col] || 0
    if (chr === '0') { scores[col] = score - 1 }
    if (chr === '1') { scores[col] = score + 1 }
    prefix += chr
    col += 1
  }
  prefixes[prefix] = (prefixes[prefix] || 0) + 1
}
const gamma_str = scores.map(c => c < 1 ? 0 : 1).join('')
const gamma = parseInt(gamma_str, 2)
// binary inverse of digits
const epsilon = gamma ^ ((2 ** col) - 1)
console.log(epsilon * gamma)
*/
