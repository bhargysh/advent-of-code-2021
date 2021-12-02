import * as fs from 'fs';

fs.readFile('input/day1Data.txt', function(err, data) {
    if(err) throw err;

    const arr = data.toString().replace(/\r\n/g,'\n').split('\n');

    for(let i of arr) {
        console.log(i);
    }
});
