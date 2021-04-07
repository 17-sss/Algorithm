// https://programmers.co.kr/learn/courses/30/lessons/12919
// 서울에서 김서방 찾기
const solution = (seoul) => `김서방은 ${seoul.findIndex((v) => v === 'Kim')}에 있다`;
solution(['Jane', 'Kim']);