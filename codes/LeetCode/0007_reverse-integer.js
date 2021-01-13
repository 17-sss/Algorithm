// https://leetcode.com/problems/reverse-integer/
/* 
    * 0007. Reverse Integer         
        Given a signed 32-bit integer x, return x with its digits reversed. 
        If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
        Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

        - Example 1:
            Input: x = 123
            Output: 321

        - Example 2:
            Input: x = -123
            Output: -321
        
        - Example 3:
            Input: x = 120
            Output: 21

        - Example 4:
            Input: x = 0
            Output: 0
 
        -- Constraints (제약조건): 
            -2(31) <= x <= 2(31) - 1    []
    
            
    * 메모
        - 역 정수
        - 샘플 값처럼 출력
        - 제약조건 
            들어가는 변수의 값은 (-2의 31승) ~ (2의 31승-1) 까지 가능.
            넘어가면 0 리턴 
*/


/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
    let [result, opt] = ["", ""];
    result += x;

    if (result.indexOf("-") === 0) {
        opt = "-";
        result = result.replace("-", "");
    };
    
    result = result.split('').reverse().join("");
    result = parseInt(opt+result);
    
    return (result <= -(2**31) || result >= (2**31)-1) ? 0 : result;
}


let x = 123;
console.log(reverse(x));

x = -123;
console.log(reverse(x));

x = 120;
console.log(reverse(x));

x = 0;
console.log(reverse(x));

x = -(2**31) - 1000000000;
console.log(reverse(x));

x = ((2**31)-1) + 1000000000;
console.log(reverse(x));