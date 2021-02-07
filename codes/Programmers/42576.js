// https://programmers.co.kr/learn/courses/30/lessons/42576
// 완주하지 못한 선수
/* 
    [1] 내 풀이 메모
        1. 풀면서 생각한 것들
            1) filter나 some을 사용하여 필터링해서 값이 나올 줄 알았지만 모순이..
            2) 다른 방법으론 그냥 그대로 이중 for문 만들어서 순회하다가 다른 값
                있으면 그 값을 결과값으로 하려했지만 어림도 없지!
            3) 마지막 선택한 방법은 인자 2개 다 정렬 후, participant 배열이 더 기니까
                얘 기준으로 순회함.
        2. 풀이
            1) 먼저 제한사항 관련하여 처리해준다.
            2) participant, completion 두 배열 모두 정렬.
            3) 더 긴 participant 배열을 기준으로 순회하면서 값을 비교,
                같지 않다면 그 값이 결과값!
    [2] 기억해두기!!
        1. 배열 sort
            1) 문자 배열엔 .sort((a,b) => a-b) 이런식으로 콜백하진않음. 숫자에다가만 써..
            2) 문자 배열 역순으로 할꺼면 .sort().reverse() 이렇게!
*/

// 1차시, 통과 성공
function solution(participant, completion) {
    if (participant.length <= 0 || participant.length > 100000) return;
    if (completion.length !== participant.length - 1 ) return;
    
    participant.sort();
    completion.sort();
    
    let result = '';
    for(let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            result = participant[i];
            break;
        }
    }
    return result;
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]);