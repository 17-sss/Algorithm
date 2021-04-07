// https://programmers.co.kr/learn/courses/30/lessons/12943
// 콜라츠 추측

function solution(num) {    
    let tmp = num;
    let cnt = 0;
    while (tmp !== 1) {
        cnt++;
        
        if (cnt >= 500) {
            cnt = -1;
            break;
        }
        
        const isEven = (tmp % 2 === 0);
        if (isEven) {
            tmp /= 2;
        } else {
            tmp = (tmp * 3) + 1;
        }
    }    
    
    return cnt;
}