---
date: '2022-03-04'
title: '[Algorithm] 손코딩 연습 - 숫자'
categories: ['Algorithm']
options: { hide: true }
---

# ✨ [Algorithm] 손코딩 연습

## 숫자

<div style="margin: 8px 0;">
  <h3 style="font-weight: 700">목차</h3>
  <a href="#00">00. 개념 요약</a></br>
  <a href="#01">01. 이진 탐색을 구현해보세요.</a></br>
  <a href="#02">02. 십진수를 이진수, 팔진수로 바꾸는 코드를 구현해보세요.</a></br>
  <a href="#03">03. 1000보다 작은 수중 3의 배수 5의 배수의 총합을 구해보세요.</a></br>
  <hr/>
</div>

<h3 id="00">00. 개념 요약</h3>

- **이진 탐색**
  - 이진탐색이란 데이터가 정렬되어있는 배열에서 특정한 값을 찾아내는 알고리즘
  - 배열의 중간에 있는 임의의 값을 선택하여 찾고자하는 값 `X`와 비교
    - `X`가 중간 값보다 _작으면_, 중간 값을 기준으로 _좌측_ 의 데이터를 대상으로 함.
    - `X`가 중간 값보다 _크면_, 중간 값을 기준으로 _우측_ 의 데이터를 대상으로 함
    - 동일한 방법으로 다시 중간의 값을 임의로 선택하고 비교함.
- **진법변환 (10진수 -> 2진수(, 8진수, 16진수 등..) 변환 공식**

  - 변환하려는 숫자를 (2, 8, 16진수)로 나누어 몫이 1이 되어 나누어지지 않을 때까지 나눠줌.

- **참고자료**
  - [이진 탐색(Binary Search) 알고리즘 개념 이해 및 추가 예제](https://cjh5414.github.io/binary-search/)
  - [[이진탐색] Leet code 704. Binary Search](https://velog.io/@rmswjdtn/이진탐색-Leet-code-704.-Binary-Search)
  - [[진법변환] 2진수,8진수,10진수,16진수 쉽게 변환하는 방법 알아보기!](https://m.blog.naver.com/icbanq/221727893563)
  - [[자바스크립트] 16진수와 10진수, 8진수, 2진수 변환하기](https://unikys.tistory.com/334)

<br/>

<h3 id="01">01. 이진 탐색을 구현해보세요.</h3>

- 일반([리트코드 704](https://leetcode.com/problems/binary-search/))

  ```js
  function solution(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) return mid;
      if (nums[mid] > target) right = mid - 1;
      else left = mid + 1;
    }
    return -1;
  }

  solution([-1, 0, 3, 5, 9, 12], 9); // 4
  solution([-1, 0, 3, 5, 9, 12], 2); // -1
  ```

<br/>

<h3 id="02">02. 십진수를 이진수, 팔진수로 바꾸는 코드를 구현해보세요.</h3>

- 10진수 -> 2진수, 8진수 변환

  ```js
  function solution(num, nType = 2) {
    let result = '';
    while (num) {
      result = (num % nType) + result;
      num = Math.floor(num / nType);
    }
    return result;
  }
  solution(10, 2); // '1010'  // 10진수 -> 2진수 변환
  solution(123, 8); // '173'  // 10진수 -> 8진수 변환
  ```

<br/>

<h3 id="03">03. 1000보다 작은 수중 3의 배수 5의 배수의 총합을 구해보세요.</h3>

- 일반

  ```js
  function solution(...args) {
    const map = new Map(args.map((v) => [v, 0]));
    for (let num = 1; num < 1000; num++) args.forEach((v) => num % v === 0 && map.set(v, map.get(v) + i));
    return map;
  }
  solution(3, 5);
  ```
