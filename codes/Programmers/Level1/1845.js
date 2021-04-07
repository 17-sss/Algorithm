// https://programmers.co.kr/learn/courses/30/lessons/1845
// 폰켓몬
const solution = (nums) => {
    const tmpLength = nums.reduce((arr, value) => {
        (arr.indexOf(value) > -1) || arr.push(value);
        return arr; 
    }, []).length;
    
    return tmpLength > (nums.length / 2) ? (nums.length / 2) : tmpLength;
}