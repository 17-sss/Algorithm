// https://programmers.co.kr/learn/courses/30/lessons/12977
// 소수 만들기 

// 3차시, 통과 성공 (isPrime 부분 이해하기)
function solution(nums) {
    const isPrime = (num) => {        
        for (let i = 2; i < (num/2); i++) {            
            if (num % i === 0) return false;
        }
        
        return true;
    }
    
    let cnt = 0;

    for(let i = 0; i < nums.length-2; i++) {
        for(let j = i+1; j < nums.length-1; j++) {
            for(let k = j+1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) cnt++;
            }   
        }        
    }
    
   return cnt;
}


console.log(solution([1, 2, 7, 6, 4]));
console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/*
// 2차시, 통과 실패
function solution(nums) {
    const arrTmp = [];

    for(let i = 0; i < nums.length-2; i++) {
        for(let j = i+1; j < nums.length-1; j++) {
            for(let k = j+1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                arrTmp.push(sum);
            }   
        }        
    }
    
    return arrTmp.reduce((result, value) => {
        if (value === 2 ||  value === 3 || value === 5 || value === 7) {
            if (result.indexOf(value) <= -1)
                result.push(value);
        } else if (value % 2 === 0 ||  value % 3 === 0 || value % 5 === 0 || value % 7 === 0) {
            return result;
        } else {
            if (result.indexOf(value) <= -1)
                result.push(value);
        }   
        return result;
    }, []).length;
}
*/

/*
// 1차시, 통과 실패
function solution(nums) {
    
    const arrTmp = [];

    for(let i = 0; i < nums.length-2; i++) {
        for(let j = i+1; j < nums.length-1; j++) {
            for(let k = j+1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                arrTmp.push(sum);
            }   
        }        
    }
    
    return arrTmp.reduce((result, value) => {
        if (value === 2 ||  value === 3 || value === 5 || value === 7) return result+= 1;
        else if (value % 2 === 0 ||  value % 3 === 0 || value % 5 === 0 || value % 7 === 0) {
            return result;
        } else {
            return result+= 1;  
        }        
    }, 0)
}
*/