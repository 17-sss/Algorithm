---
date: '2022-03-07'
title: '[Algorithm] 손코딩 연습 - 정렬 (선택, 버블, 삽입)'
categories: ['Algorithm']
options: { hide: true }
---

# ✨ [Algorithm] 손코딩 연습

## 정렬 (선택, 버블, 삽입)

<div style="margin: 8px 0;">
  <h3 style="font-weight: 700">목차</h3>
  <a href="#00">00. 개념 요약</a></br>
  <a href="#01">01. 선택정렬을 구현해보세요.</a></br>
  <a href="#02">02. 버블정렬을 구현해보세요</a></br>
  <a href="#03">03. 삽입정렬을 구현해보세요.</a><strong>(❓ 모르겠따..)</strong></br>
  <!-- <a href="#04">04. 병합정렬을 구현해보세요.</a></br> -->
  <hr/>
</div>

<h3 id="00">00. 개념 요약</h3>

> 오름차순 기준 설명

- **선택 정렬**

  - 제자리 정렬(in-place sorting) 알고리즘의 하나
    - 입력 배열(정렬되지 않은 값들) 이외에 다른 추가 메모리를 요구하지 않는 정렬 방법
  - 해당 순서에 원소를 넣을 위치는 이미 정해져 있고, 어떤 원소를 넣을지 선택하는 알고리즘
    - 첫 번째 순서에는 첫 번째 위치에 가장 최솟값을 넣는다.
    - 두 번째 순서에는 두 번째 위치에 남은 값 중에서의 최솟값을 넣는다.
    - (생략)

- **버블 정렬**

  - 서로 인접한 두 원소를 검사하여 정렬하는 알고리즘
    - 인접한 2개의 레코드를 비교하여 크기가 순서대로 되어있지 않으면 서로 교환

- **삽입 정렬**

  - 손안의 카드를 정렬하는 방법과 유사
    - 새로운 카드를 기존의 정렬된 카드 사이의 올바른 자리를 찾아 삽입한다.
    - 새로 삽입될 카드의 수만큼 반복하게 되면 전체 카드가 정렬된다.
  - 자료 배열의 모든 요소를 **앞에서부터 차례대로 이미 정렬된 배열 부분과 비교**하여,  
    자신의 위치를 찾아 삽입함으로써 정렬을 완성하는 알고리즘
  - 매 순서마다 해당 원소를 삽입할 수 있는 위치를 찾아 해당 위치에 넣음

<!-- - **병합 정렬** -->

**[참고자료]**

- [[알고리즘] 선택 정렬(selection sort)이란](https://gmlwjd9405.github.io/2018/05/06/algorithm-selection-sort.html)
- [[알고리즘] 버블 정렬(bubble sort)이란](https://gmlwjd9405.github.io/2018/05/06/algorithm-bubble-sort.html)
- [[알고리즘] 삽입 정렬(insertion sort)이란](https://gmlwjd9405.github.io/2018/05/06/algorithm-insertion-sort.html)
- [[알고리즘] 합병 정렬(merge sort)이란](https://gmlwjd9405.github.io/2018/05/08/algorithm-merge-sort.html)
- [[Algorithm] 선택정렬 / 버블정렬 / 삽입정렬](https://prodo-developer.tistory.com/110)
- [[알고리즘] 기본 정렬 알고리즘( 선택정렬, 버블정렬, 삽입정렬)](https://reakwon.tistory.com/37)
- [[알고리즘] 정렬 알고리즘-1 (버블 정렬, 선택 정렬, 삽입 정렬)](https://velog.io/@hwamoc/알고리즘-정렬-알고리즘-1-버블-정렬-선택-정렬-삽입-정렬)
- [알고리즘 - 내림차순 삽입정렬](https://thinkpro.tistory.com/33)
- [자바 [JAVA] - 삽입 정렬 (Insertion Sort)](https://st-lab.tistory.com/179)

<br/>

<h3 id="01">01. 선택정렬을 구현해보세요.</h3>

```js
function solution(arr, isDesc = false) {
  const LENGTH = arr.length;
  for (let i = 0; i < LENGTH; i++) {
    let tmpIdx = i;
    for (let j = i + 1; j < LENGTH; j++) {
      const flag = isDesc ? arr[tmpIdx] < arr[j] : arr[tmpIdx] > arr[j];
      if (flag) tmpIdx = j;
    }

    [arr[tmpIdx], arr[i]] = [arr[i], arr[tmpIdx]];
  }
  return arr;
}
solution([3, 5, 6, 9, 7]);
```

- 반복문 `i`가 1회전 순회할 때마다, 배열의 `i`번째 원소는 정렬이 된 것임.  
- 반복문 `j`내에서 반복문 `i`에 선언한 `tmpIdx`의 값을 조건에 따라 계속 업데이트 함.  
  (만약 오름차순이라면 큰 값이 뒤로 감)

<br/>

<h3 id="02">02. 버블정렬을 구현해보세요.</h3>

```js
function solution(arr, isDesc = false) {
  const LENGTH = arr.length;
  const MAX_LOOP = arr.length - 1;
  let nLoopCnt = 0;
  while (nLoopCnt < MAX_LOOP) {
    for (let i = 0; i < MAX_LOOP - nLoopCnt; i++) { // 1️⃣
      const flag = isDesc ? arr[i] < arr[i + 1] : arr[i] > arr[i + 1];
      if (flag) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    nLoopCnt++;
  }
  return arr;
}
solution([3, 5, 6, 9, 7]);
```
- 순회할 때마다 뒷 쪽에 있는 값은 체크할 필요 없음 - 1️⃣  
  (이론상 매 순회마다 뒷 쪽에 있는 값은 정렬이 되었으니까.)
  - 1회전 할 때, 배열내의 맨 뒤에 있는 값은 정렬이 된 것
  - 2회전 할 때, 배열내의 맨 뒤의 바로 앞에 있는 값은 정렬이 된 것.

<br/>

<h3 id="03">03. 삽입정렬을 구현해보세요.<strong>(❓ 모르겠따..)</strong></h3>

```js
function solution(arr, isDesc = false) {
  const LENGTH = arr.length;
  for (let i = 1; i < LENGTH; i++) {
    let target = arr[i];
    let j = i - 1;

    while (j >= 0 && isDesc ? arr[j] < target : target < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = target;
  }
  return arr;
}
solution([3, 5, 6, 9, 7]);
```

<br/>

<!--
<h3 id="04">04. 병합정렬을 구현해보세요.</h3>

```js

```
-->
