// https://programmers.co.kr/learn/courses/30/lessons/12926
// 시저 암호
/*
    [1] 내 풀이 메모
        1. 풀이
            1) 일단 배열로 변경
            2) 배열을 map으로 순환하면서 한 글자씩 체크
            - 소문자 범위는 65~90 / 대문자범위는 97~122    
            - 변수 code, v.charCodeAt으로 ASCII 코드로 변경
            - 문자를 대문자로 변환 후, 현재 글자와 비교. (대소문자 구별)
                - 대문자이며, 90이 넘어가면 알파벳이 아님. -26해줌
                - 소문자이며, 122이 넘어가면 알파벳이 아님. -26해줌
            3) 다시 String으로 변환
            4) 전부 순환한 후 join!
        2. 통과실패 이유
            1) a로 다시되는 경우를 z & Z일때만 비교했었음...
*/
function solution(s, n) {
    return s.split('').map((v) => {
        if (v === " ") return ' ';
        let code = v.charCodeAt() + n
        if(( (v.toUpperCase() === v) && code > 90) || ( (v.toUpperCase() !== v) && code > 122) ){
            code -= 26   
        }
        return String.fromCharCode(code)        
    }).join("");
}


// -----------------------------------------------------------------------------------------

// 1차시, 통과 실패
/*
function solution(s, n) {    
    // const regExr = /[a-zA-Z]/g;    
    return s.split('').map((v) => {
        if (v === " ") return ' ';
        if (v === 'z' || v === 'Z') {
            let tmpN = n;
            let tmp = v === 'z' ? "a".charCodeAt("a") : "A".charCodeAt("A");
            tmpN--;
            return String.fromCharCode(tmp + tmpN);
        } else {
            return String.fromCharCode(v.charCodeAt(v) + n);
        }         
    }).join("");
}
*/