// https://programmers.co.kr/learn/courses/30/lessons/72410
// 카카오 2021 코딩테스트 - 신규 아이디 추천
/* 
    1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
    2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
    3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
    4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
    5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
    6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
        만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
    7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
*/

const { log } = console;

// 2차시, 통과 성공
function solution(new_id) {
    let answer = new_id;    
    
    answer = answer.toLowerCase()                       // 1
        .replace(/([^-_.0-9a-z])/gi, '')                // 2        이 정규표현식이 오류였음, 괄호빼야했음..숫자나 영문에 있는 괄호.    
        .replace(/\.{2,}/g, '.')                        // 3
        .replace(/^\./g, '').replace(/\.$/g, '');       // 4
    if (answer.length === 0)    answer = 'a';           // 5
    if (answer.length > 15) {                           // 6
        answer = answer.substr(0, 15);
        answer = answer.replace(/\.$/g, '');
    }
    if (answer.length < 3) {                            // 7
        const answerLast = answer[answer.length-1];
        while (answer.length !== 3) {
            answer += answerLast;
        }
    }
    log(answer);
    
    return answer;
}

solution("...!@BaT#*..y.abcdefghijklm");    // "...!@BaT#*..y.abcdefghijklm"
solution("z-+.^.");                         // "z--"
solution("=.=");                            // "aaa"
solution("123_.def");                       // "123_.def"
solution("abcdefghijklmn.p");               // "abcdefghijklmn"

/*
// 1차시, 통과 실패
function solution(new_id) {
    let answer = "";
    answer = new_id;
    answer = answer.toLowerCase()                       // 1
        .replace(/([^-_.(0-9)(a-z)])/g, '')             // 2
        .replace(/\.{2,}/g, '.')                        // 3
        .replace(/^\./g, '').replace(/\.$/g, '');       // 4
    if (answer.length === 0)    answer = 'a';           // 5
    if (answer.length > 15) {                           // 6
        answer = answer.substr(0, 15);
        answer = answer.replace(/\.$/g, '');
    }
    if (answer.length < 3) {                            // 7
        const answerLast = answer[answer.length-1];
        while (answer.length !== 3) {
            answer += answerLast;
        }
    }
    log(answer)
    
    
    return answer;
}
*/