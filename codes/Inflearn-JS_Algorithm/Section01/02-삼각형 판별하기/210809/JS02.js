// ME
function solution(a, b, c) {
    let nMaxItem;
    if (a > b) nMaxItem = a;
    else nMaxItem = b;
    if (nMaxItem < c) nMaxItem = c;

    const anotherSum = (a + b + c) - nMaxItem;
    return anotherSum > nMaxItem ? "YES" : "NO";
}

console.log(solution(6, 7, 11)); // YES
console.log(solution(13, 33, 17)); // NO

// ANSWER
/*
function solution(a, b, c){
    let answer="YES", max;
    let tot=a+b+c;
    if(a>b) max=a;
    else max=b;
    if(c>max) max=c;
    if(tot-max<=max) answer="NO"; 
    return answer;
}
*/

