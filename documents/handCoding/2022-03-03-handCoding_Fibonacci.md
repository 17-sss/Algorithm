---
date: '2022-03-03'
title: '[Algorithm] 손코딩 연습 - 피보나치 수열'
categories: ['Algorithm']
options: { hide: true }
---

# [Algorithm] 손코딩 연습

## 정렬 (피보나치 수열)

<div style="margin: 8px 0;">
  <h3 style="font-weight: 700">목차</h3>
  <a href="#00">00. 개념 요약</a></br>
  <a href="#01">01. 피보나치 수열을 재귀를 이용해 구현해보세요.</a></br>
  <a href="#02">02. 피보나치 수열을 DP를 이용해 구현해보세요.</a></br>
  <a href="#03">03. 피보나치 수열을 FOR문을 이용해 구현해보세요.</a></br>
  <hr/>
</div>

<h3 id="00">00. 개념 요약</h3>

- 피보나치 수열은 이전 두 요소의 합이 다음 원소가 되는 수열로 정의.
  - 이 때, 1, 2번 원소는 이전 두 요소가 없기 때문에 1로 정의.
- 공식
  - **_F𝗇 = F𝗇 - ₁ + F𝗇 - ₂_**
  - 단, **_F₁ = F₂ = 1_**
- 만약 `10`이 주어졌을 경우 `55`(`[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]`)을 반환해야 함
- **참고자료**
  - [JW MATHidea : 피보나치 수열](https://jwmath.tistory.com/117)
  - [코딩 스낵 : 재귀 (2) - 피보나치 수열 (Fibonacci Series)](https://gusdnd852.tistory.com/95)

<br/>

<h3 id="01">01. 피보나치 수열을 재귀를 이용해 구현해보세요.</h3>

- 일반 (공식 활용)

  ```js
  function solution(num) {
    if (!num || num < 0) return 0;
    if (num === 1 || num === 2) return 1;
    return solution(num - 1) + solution(num - 2);
  }
  solution(10); // 55
  ```

- Array 활용

  ```js
  function solution(num) {
    if (!num) return [];

    function recursive(current = 0, result = [1]) {
      if (result.length >= num) return result;
      const isPrevValueOk = result.length - 2 > -1;
      const prevItem = isPrevValueOk ? result[result.length - 2] : 1;
      result.push(current + prevItem);
      return recursive(current + prevItem, result);
    }

    const result = recursive();
    return result[result.length - 1];
  }
  solution(10); // 55
  ```

  - 값을 구할 때 현재 값의 위치 -2에 있는 값을 더해주어야 함. 만약 없다면 1로
  - _뭔가 보이는대로 구현한 듯.._

<br/>

<h3 id="02">02. 피보나치 수열을 DP를 이용해 구현해보세요.</h3>

- 일반

  ```js
  function solution(num) {
    if (!num || num < 0) return 0;
    if (num <= 2) return 1;
    num -= 2;
    const arrDP = [1, 1];
    while (num--) arrDP.push(arrDP[arrDP.length - 2] + arrDP[arrDP.length - 1]);
    return arrDP[arrDP.length - 1];
  }
  solution(10); // 55
  ```

<br/>

<h3 id="03">03. 피보나치 수열을 FOR문을 이용해 구현해보세요.</h3>

- 일반

  ```js
  function solution(num) {
    if (!num || num < 0) return 0;
    if (num <= 2) return 1;
    let [prev, curr] = [1, 1];
    for (let i = num - 2; i > 0; i--) [prev, curr] = [curr, curr + prev];
    return curr;
  }
  solution(10);
  ```
