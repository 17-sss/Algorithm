// https://programmers.co.kr/learn/courses/30/lessons/12948
// 핸드폰 번호 가리기
const solution = (phone_number) => {
    const arrTmp = phone_number.split('');
    return arrTmp.map((v, i) => {
        if ((arrTmp.length-4) > i)  return '*'
        else return v;
    }).join('');
}