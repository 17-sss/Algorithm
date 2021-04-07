// https://programmers.co.kr/learn/courses/30/lessons/17681
// 2018 카카오 코딩테스트 - 비밀지도

// 1차시, 통과 성공
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
        
        while(result.length !== n) {
            result.unshift(0);
        }
        
        return result;
    };
    
    const convertArr1 = arr1.map((v) => convertNum(v, n));
    const convertArr2 = arr2.map((v) => convertNum(v, n));
    
    const result = convertArr1.map((arr1, i) => {        
        const arr2 = convertArr2[i];
        return arr1.map((v, i) => (v + arr2[i]) >= 1 ? '#' : ' ').join('');        
    });
    
    console.log(result);
        
    return result;
};

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);              // [ '#####', '# # #', '### #', '#  ##', '#####' ]
solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);    // [ '######', '###  #', '##  ##', ' #### ', ' #####', '### # ' ]