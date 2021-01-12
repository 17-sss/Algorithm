// https://www.acmicpc.net/problem/1000
const fs = require('fs');

function main() {
    const input = fs.readFileSync('./stdin/a1000.txt').toString().split(' ');
    const a = parseInt(input[0]);
    const b = parseInt(input[1]);
    console.log(a+b);
};
main();

/* Custom */
function mainCustom(strFilename, strSplit) {
    const input = fs.readFileSync(strFilename).toString().trim().split(strSplit ? strSplit : "").map(e => +e);
    return input.reduce((prev, curr) => curr ? (prev + curr) : (prev + 0));
};

// console.log(mainCustom('./stdin/a1000_custom', "\n"));