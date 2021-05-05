const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function solution() {
    // 문제 푸는 곳
}

rl.on('line', (line) => {
    rl.close();
}).on('close', () => {
    process.exit();
});
