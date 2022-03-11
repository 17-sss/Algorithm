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

    const additionalValue = Number(str.length % 2 !== 0); // 홀수일 경우, while 조건에 1추가
    while (Math.floor(str.length / 2) + additionalValue !== left) {
      [arrStr[left], arrStr[right]] = [arrStr[right], arrStr[left]];
      left++;
      right--;
    }
    return arrStr.join('');
  }

  solution('Apple');
  solution('Banana');
  ```

- 문자열 합치기

  ```js
  function solution(str) {
    let [leftStr, rightStr] = ['', ''];
    let [left, right] = [0, str.length - 1];

    while (left < right) {
      leftStr = str[left] + leftStr;
      rightStr += str[right];
      left++;
      right--;
    }
    const isEven = str.length % 2 === 0;
    const midStr = isEven ? '' : str[Math.floor(str.length / 2)];

    return `${rightStr}${midStr}${leftStr}`;
  }

  solution('Apple');
  solution('Banana');
  ```
  > 이 방법은 추천 할 방법일까..? 아닌 거 같은데 꼭..
  - `str`의 길이가 짝수일 경우를 기준으로 추가함. (`left < right`)
  - 홀수일 경우는 `rightStr`과 `leftStr`을 합칠 때 중간에 있는 문자를 넣어줌  
    (`${rightStr}${midStr}${leftStr}`)
