---
date: '2022-03-03'
title: '[Algorithm] 손코딩 연습 - 최대공약수 & 최소공배수, 팩토리얼'
categories: ['Algorithm']
options: { hide: true }
---

# [Algorithm] 손코딩 연습

## 최대공약수 & 최소공배수 (GCD & LCM), 팩토리얼

<div style="margin: 8px 0;">
  <h3 style="font-weight: 700">목차</h3>
  <a href="#00">00. 개념 요약</a></br>
  <a href="#01">01. 최대공약수, 최소공배수를 계산하는 소스를 구현해보세요.</a></br>
  <a href="#02">02. 팩토리얼을 구현해보세요.</a></br>
  <hr/>
</div>

<h3 id="00">00. 개념 요약</h3>

- **최대공약수, 최소공배수**

  - **최대공약수(GCD)**: 최대공약수는 두 수 A와 B의 공통된 약수 중에 가장 큰 정수이다.
  - **최소공배수(LCM)**: 두 수, 혹은 그 이상의 여러 수의 공통인 배수 중 가장 작은 수이다.
  - 유클리드 호제법?
    - "유클리드 호제법"의 기본 원리는 num1를 num2로 나눈 나머지를 r이라 했을 때,  
      `GCD(num1, num2) = GCD(num2, r)`과 같다는 것

- **팩토리얼**

  - 팩토리얼은 한글로 "계승"이라고 하며, 1에서 시작하여 **어떤 범위에 있는 모든 정수를 곱하는 것을 의미**
  - 정수는 양의 정수를 사용하며 팩토리얼을 표시하는 기호는 `!`를 사용
  - `**5!**` = `(1 * 2 * 3 * 4 * 5)` 를 의미

- **참고자료**
  - [JavaScript로 최대공약수(GCD), 최소공배수(LCM) 구하기](https://velog.io/@devjade/JavaScript로-최대공약수GCD-최소공배수LCM-구하기)
  - [[Q&A] 팩토리얼(Factorial) 구하기](https://m.blog.naver.com/tipsware/221234390769)

<br/>

<h3 id="01">01. 최대공약수, 최소공배수를 계산하는 소스를 구현해보세요.</h3>

- 일반

  ```js
  function solution(num1, num2) {
    // 최대공약수
    const getGCD = (num1, num2) => {
      let result = 1;
      const MAX_LOOP = Math.min(num1, num2);
      for (let i = 2; i <= MAX_LOOP; i++) {
        if (num1 % i === 0 && num2 % i === 0) result = Math.max(result, i);
      }
      return result;
    };

    // 최소공배수
    const getLCM = (num1, num2) => {
      let result = 1;
      while (true) {
        if (result % num1 === 0 && result % num2 === 0) break;
        result++;
      }
      return result;
    };

    return [getGCD(num1, num2), getLCM(num1, num2)];
  }

  solution(3, 12); // [3, 12]
  solution(2, 5); // [1, 10]
  ```

- 유클리드 호제법 🤔

  ```js
  function solution(num1, num2) {
    const getGCD = (num1, num2) => (num1 % num2 === 0 ? num2 : getGCD(num2, num1 % num2));
    const getLCM = (num1, num2) => (num1 * num2) / getGCD(num1, num2);
    return [getGCD(num1, num2), getLCM(num1, num2)];
  }
  ```

<br/>

<h3 id="02">02. 팩토리얼을 구현해보세요.</h3>

- 일반

  ```js
  function solution(num) {
    if (num <= 0) return 0;
    let result = 1;
    while (num) {
      result *= num;
      num--;
    }
    return result;
  }
  solution(5);
  ```

- 재귀

  ```js
  function solution(num) {
    if (num <= 0) return 0;
    return num - 1 ? num * solution(num - 1) : num;
  }
  solution(5);
  ```
