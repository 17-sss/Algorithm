// https://programmers.co.kr/learn/courses/30/lessons/12901
// 2016년
function solution(a, b) {
    const arrDay = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const date = new Date(`2016/${a}/${b}`);
    return arrDay[date.getDay()];
}