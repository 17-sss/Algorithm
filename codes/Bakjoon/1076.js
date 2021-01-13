// https://www.acmicpc.net/problem/1076
/* 
    ** 문제 1076
        전자 제품에는 저항이 들어간다. 저항은 색 3개를 이용해서 그 저항이 몇 옴인지 나타낸다.
        처음 색 2개는 저항의 값이고, 마지막 색은 곱해야 하는 값이다.
        저항의 값은 다음 표를 이용해서 구한다.

            색	    값	    곱
            black	0	    1
            brown	1	    10
            red	    2	    100
            orange	3	    1000
            yellow	4	    10000
            green	5	    100000
            blue	6	    1000000
            violet	7	    10000000
            grey	8	    100000000
            white	9	    1000000000
        예를 들어, 저항에 색이 yellow, violet, red였다면 저항의 값은 4,700이 된다.
        // yellow violet red

    1.입력
        첫째 줄에 첫 번째 색, 둘째 줄에 두 번째 색, 셋째 줄에 세 번째 색이 주어진다. 
        색은 모두 위의 표에 쓰여 있는 색만 주어진다.

    2. 출력
        입력으로 주어진 저항의 저항값을 계산하여 첫째 줄에 출력한다.
*/

/*
    9차시말고도 맞는 코드가 몇개 있을 것임. 이번엔 문제를 제대로 읽지 않은게 큼.
    한 줄에 모든 값을 받아오면 안됐음.. 이 문제에선 한 값씩 받아서 array에 넣었어야함.
    한 줄에 받아서 split(" ")이 아니라..
*/

// 9차시++, 통과 성공 (이걸로 코드스쿼드에 올림)
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function main () {    
    const colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

    const arrColors = [];

    rl.on('line', (line) => {    
        arrColors.push(line);
        if (arrColors.length === 3) rl.close();                
    }).on('close', () => {            
        const [color1, color2, multipleColor] = arrColors;
        let result = colors.indexOf(color1).toString() + colors.indexOf(color2).toString();     // 저항 값 
        result = Number(result) * (10 ** colors.indexOf(multipleColor));
        
        console.log(result);                
        process.exit();
    });
};
main();


// 9차시, 통과 성공 (문제를 제대로 읽자..)  
//      9차시++ 보다 속도는 8ms 빠름, 메모리 & 코드길이는 이게 더 길어
/*
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function main () {    
    const colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

    const arrColors = [];

    rl.on('line', (line) => {    
        arrColors.push(line);
        if (arrColors.length === 3) rl.close();                
    }).on('close', () => {            
        for (let i = 0; i < arrColors.length; i++) {
            for (let j = 0; j < colors.length; j++) {
                if (colors[j] === arrColors[i]) {
                    arrColors[i] = j;
                }
            }            
        }
        let result = ( (arrColors[0] * 10) + arrColors[1] ) * (10 ** arrColors[2]);
    
        console.log(result);
        process.exit();
    });
};
main();
*/


// 8차시. 통과 실패
/*
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function main () {    
    const colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
    const multiNums = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000];

    const arrColors = [];

    rl.on('line', (line) => {       
        line.split(" ").map((v) => arrColors.push(v));        
        rl.close();
    }).on('close', () => {            
        for (let i = 0; i < arrColors.length; i++) {
            for (let j = 0; j < colors.length; j++) {
                if (colors[j] === arrColors[i]) {
                    arrColors[i] = j;
                }
            }            
        }
        let result = ((arrColors[0] * 10) + arrColors[1]) * multiNums[arrColors[2]];

        console.log(result);
        process.exit();
    });
};
main();
*/

// 7차시. 통과 실패
/*
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function main () {    
    const colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

    const arrColors = [];

    rl.on('line', (line) => {       
        line.split(" ").map((v) => arrColors.push(v));        
        rl.close();
    }).on('close', () => {            
        for (let i = 0; i < arrColors.length; i++) {
            for (let j = 0; j < colors.length; j++) {
                if (colors[j] === arrColors[i]) {
                    arrColors[i] = j;
                }
            }            
        }
        let result = ( (arrColors[0] * 10) + arrColors[1] ) * (10 ** arrColors[2]);
    
        console.log(result);
        process.exit();
    });
};
main();
*/


// 6차시. 통과 실패
/*
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

function main () {    
    const arrColors = [];

    rl.on('line', (line) => {       
        line.split(" ").map((v) => arrColors.push(v));        
        rl.close();
    }).on('close', () => {            
        for (let i = 0; i < arrColors.length; i++) {
            for (let j = 0; j < colors.length; j++) {
                if (colors[j] === arrColors[i]) {
                    arrColors[i] = j;
                }
            }            
        }        
        const result = ("" + arrColors[0] + arrColors[1]) * (10 ** arrColors[2]);
        
        console.log(result);                
        process.exit();
    });
};
main();
*/


// 5차시. 통과 실패
/*
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

function main () {    
    const arrColors = [];

    rl.on('line', (line) => {       
        line.split(" ").map((v) => arrColors.push(v));        
        rl.close();
    }).on('close', () => {
        const [color1, color2, multipleColor] = arrColors;
        let result = "" + colors.indexOf(color1) + colors.indexOf(color2);     // 저항 값 
        result = result * (10 ** colors.indexOf(multipleColor));
        
        console.log(result);                
        process.exit();
    });
};
main();
*/

// 4차시. 통과 실패
/*
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function main () {
    const colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
    const arrColors = [];

    rl.on('line', (line) => {       
        line.split(" ").map((v) => arrColors.push(v));        
        rl.close();
    }).on('close', () => {
        const [color1, color2, multipleColor] = arrColors;
        let result = colors.indexOf(color1).toString() + colors.indexOf(color2).toString();     // 저항 값 
        result = result * (10 ** colors.indexOf(multipleColor));
        
        console.log(result);                
        process.exit();
    });
};
main();
*/

/*
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function main () {
    const colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
    const arrColors = [];

    rl.on('line', (line) => {       
        line.split(" ").map((v) => arrColors.push(v));        
        rl.close();
    }).on('close', () => {
        const [color1, color2, multipleColor] = arrColors;
        let result = colors.indexOf(color1).toString() + colors.indexOf(color2).toString();     // 저항 값 
        for (let i = 0; i < colors.indexOf(multipleColor); i++) 
            result += "0";
        
        console.log(+result);                
        process.exit();
    });
};
main();
*/

// 2차시. 통과 실패
/* 
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function main () {
    const colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
    const arrColors = [];

    rl.on('line', (line) => {       
        line.split(" ").map((v) => arrColors.push(v));        
        rl.close();
    }).on('close', () => {
        const [color1, color2, multipleColor] = arrColors;
        const resistance = Number(colors.indexOf(color1).toString() + colors.indexOf(color2).toString());     // 저항 값 
        let multipleValue = "1";
        for (let i = 0; i < colors.indexOf(multipleColor); i++) 
            multipleValue += "0";
        
        console.log(resistance * Number(multipleValue));                
        process.exit();
    });
};
main();
*/


// 1차시. 런타임에러
/*
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function main () {
    const colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
    const arrColors = [];

    rl.on('line', (line) => {       
        line.split(" ").map((v) => arrColors.push(v));        
        rl.close();
    }).on('close', () => {
        const [color1, color2, multipleColor] = arrColors;
        const resistance = Number(colors.indexOf(color1).toString() + colors.indexOf(color2).toString());     // 저항 값 
        const zeroFill = colors.indexOf(multipleColor);        
        const multipleValueArr = new Array(zeroFill).fill(0);
        multipleValueArr.unshift(1);            

        console.log(resistance * Number(multipleValueArr.join("")));                
        process.exit();
    });
};
main();
*/