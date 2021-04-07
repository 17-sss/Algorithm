// https://programmers.co.kr/learn/courses/30/lessons/12950
// 행렬의 덧셈

function solution(arr1, arr2) {
    const result = [];
    for(let i = 0; i < arr1.length; i++) {
        const arrTmp1 = arr1[i];
        const arrTmp2 = arr2[i];
        
        const tmp = [];
        for(let j = 0; j < arrTmp1.length; j++) {
            const value1 = arrTmp1[j];
            const value2 = arrTmp2[j];
            tmp.push(value1+value2)
        }
        result.push(tmp);
    }
    
    return result;
}