// https://programmers.co.kr/learn/courses/30/lessons/12921
// 소수 찾기

// 3차시, 통과 성공 (참고해서 품, 다른 방법으로도 풀어보기)
const solution = (n) => {
    const arr = Array.from({ length: n }, (_, i) => i + 1);
    arr[0] = 0;
    for (let i = 2; i ** 2 <= n; i++) {
        if (arr[i - 1]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j - 1] = 0;
            }
        }
    }

    const count = arr.filter((v) => v).length;
    return count;
};
