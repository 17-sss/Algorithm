// https://leetcode.com/problems/implement-strstr/
// 28. Implement strStr()

// 1차시, 통과 성공 (겁나 빠름) | KMP로 풀어보기 
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle)  => haystack.indexOf(needle);