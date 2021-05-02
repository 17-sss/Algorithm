const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function main() {


    rl.on('line', (line) => {

        rl.close();
    }).on('close', () => {

        process.exit();
    });
}
main();