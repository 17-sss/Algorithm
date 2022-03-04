---
date: '2022-03-02'
title: '[Algorithm] 손코딩 연습 - 문자열'
categories: ['Algorithm']
options: { hide: true }
---

# ✨ [Algorithm] 손코딩 연습

## 문자열

<div style="margin: 8px 0;">
  <h3 style="font-weight: 700">목차</h3>
  <h3 id="00">00. 개념 요약</h3>
  <a href="#01">01. 문자열이 고유한 문자만으로 이루어져있는지 구현해보세요.</a></br>
  <a href="#02">02. 문자열을 거꾸로 만들어보세요.</a></br>
  <hr/>
</div>

<h3 id="00">00. 개념 요약</h3>

> **[SKIP]**

<br/>

<h3 id="01">01. 문자열이 고유한 문자만으로 이루어져있는지 구현해보세요.</h3>

- 정규표현식 활용

  ```js
  function solution(arrChar, str) {
    const strRegex = `[${arrChar.join('')}]+`;
    const REG_EX = new RegExp(strRegex, 'g');
    return str.replace(REG_EX, '').length <= 0;
  }

  solution(['s', 'a', 'b'], 'bbsasabb'); // true
  solution(['s', 'a', 'b'], 'sooabe'); // false
  ```

- Set & Array 활용

  ```js
  function solution(arrChar, str) {
    const arrCharSort = arrChar.sort();
    const arrStrSort = [...new Set([...str])].sort();

    return arrCharSort.join('') === arrStrSort.join('');
  }

  solution(['s', 'a', 'b'], 'bbsasabb'); // true
  solution(['s', 'a', 'b'], 'sooabe'); // false
  ```

<br/>

<h3 id="02">02. 문자열을 거꾸로 만들어보세요.</h3>

- Array 활용

  ```js
  function solution(str) {
    return [...str].reverse().join('');
  }
  solution('Apple');
  ```

- 투 포인터 & Array 활용

  ```js
  function solution(str) {
    const arrStr = [...str]; // 문자열은 불변형이라 인덱스로 위치변경 불가

    let left = 0;
    let right = str.length - 1;

    while ((Math.floor(str.length / 2) + 1) !== left) {
      [arrStr[left], arrStr[right]] = [arrStr[right], arrStr[left]];
      left++;
      right--;
    }
    return arrStr.join('');
  }

  solution('Apple');
  ```
