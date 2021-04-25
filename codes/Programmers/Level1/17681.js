// https://programmers.co.kr/learn/courses/30/lessons/17681
// 2018 카카오 코딩테스트 - 비밀지도

// 1차시, 통과 성공 (2021.04.21)
function dec2bin(num, n) {
    const result = [];
    while (num !== 0) {
        const remainder = num % 2;
        result.push(remainder);
        num = Math.floor(num / 2);
    }
    while (result.length !== n) result.push(0);

    return result.reverse();
}

function solution(n, arr1, arr2) {
    const convertArr1 = arr1.map((num) => dec2bin(num, n));
    const convertArr2 = arr2.map((num) => dec2bin(num, n));

    return convertArr1.map((arrValue, idx) => {
        const arr2Value = convertArr2[idx];
        return arrValue.map((v, i) => (arr2Value[i] + v >= 1 ? '#' : ' ')).join('');
    });
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]); // [ '#####', '# # #', '### #', '#  ##', '#####' ]
solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]); // [ '######', '###  #', '##  ##', ' #### ', ' #####', '### # ' ]

// 1차시, 통과 성공 (2021.02.03)
/*
function solution(n, arr1, arr2) {
    const convertNum = (num, n) => {
        let result = [];
        let numTmp = num;
        while (numTmp > 0) {
            let remainder = numTmp % 2;
            result.push(remainder);

            numTmp = Math.floor(numTmp / 2);
        }
        result = result.reverse();

        while (result.length !== n) {
            result.unshift(0);
        }

        return result;
    };

    const convertArr1 = arr1.map((v) => convertNum(v, n));
    const convertArr2 = arr2.map((v) => convertNum(v, n));

    const result = convertArr1.map((arr1, i) => {
        const arr2 = convertArr2[i];
        return arr1.map((v, i) => (v + arr2[i] >= 1 ? '#' : ' ')).join('');
    });

    console.log(result);

    return result;
}
*/
