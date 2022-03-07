---
date: '2022-03-04'
title: '[Algorithm] 손코딩 연습 - 링크드 리스트, 해시테이블, '
categories: ['Algorithm']
options: { hide: true }
---

# [Algorithm] 손코딩 연습

## 링크드 리스트, 해시테이블 (LinkedList, HashTable)

<div style="margin: 8px 0;">
  <h3 style="font-weight: 700">목차</h3>
  <a href="#00">00. 개념 요약</a></br>
  <a href="#01">01. 링크드 리스트, 를 구현해보세요.</a></br>
  <a href="#02">02. 해시테이블을 구현해보세요.</a></br>
  <hr/>
</div>

<h3 id="00">00. 개념 요약</h3>

- **링크드리스트(LinkedList)**

  - 설명
    - 링크드 리스트는 순서가 있는 데이터를 늘어놓은 형태의 자료구조를 의미.
    - 링크드 리스트는 각각의 데이터가 그 다음의 데이터를 가리키는 방식으로 순서를 구현.
  - 부가 설명
    - 링크드 리스트의 각 원소는 노드 (Node)
    - 링크드 리스트의 맨 앞과 맨 끝 노드를 각각 머리 (Head), 꼬리 (Tail) 노드
    - 각 노드는 데이터와 그 다음 노드를 가리키는 포인터 (Pointer) 를 가지고 있음
    - 각 노드의 앞쪽 노드를 전임 노드 (Predecessor Node), 뒤쪽 노드를 후임 노드 (Successor Node) 라고 함
  - _이 자료구조를 만들 때.._
    - `addFirst`, `addLast`, `removeFirst`, `removeLast` 등의 메서드 만들기.

- **해시테이블(HashTable)**

  - 해시 테이블은 어떤 특정 값을 받으면 그 값을 해시 함수에 통과시켜 나온 인덱스(index)에 저장하는 자료 구조
  - 보통 배열을 사용해서 구현하는 경우가 많음.


**[참고자료]**
  - [[DS] 링크드 리스트 (Linked List)](https://hudi.blog/ds-linked-list/)
  - [자바스크립트로 해시테이블 구현하는 방법 : 1](https://eunjinii.tistory.com/m/87)
  - [자바스크립트로 해시테이블 구현하는 방법 : 2](https://eunjinii.tistory.com/m/88)
  - [Evans Library : JavaScript와 함께 해시테이블을 파헤쳐보자](https://evan-moon.github.io/2019/06/25/hashtable-with-js/)

<br/>

<h3 id="01">01. 링크드 리스트, 를 구현해보세요.</h3>

- 일반

  ```js
  class ListNode {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }

  class LinkedList {
    constructor(initNode) {
      this.head = initNode;
    }

    find(value) {
      let curr = this.head;
      while (curr) {
        if (curr.value === value) return curr;
        curr = curr.next;
      }
      return null;
    }

    addFirst(value) {
      const prevHead = this.head;
      this.head = new ListNode(value, prevHead);
    }

    addLast(value) {
      let lastNode = this.head;
      while (lastNode.next) lastNode = lastNode.next;
      if (!lastNode) return;
      lastNode.next = new ListNode(value);
    }

    removeFirst() {
      this.head = this.head.next;
    }

    removeLast() {
      let tmpNode = this.head;
      while (tmpNode.next.next) tmpNode = tmpNode.next;
      if (!tmpNode) return;
      tmpNode.next = null;
    }
  }
  ```

  ```js
  const list = new LinkedList(new ListNode(5));
  list.addFirst(2);
  list.addLast(54);
  console.dir(list, { depth: 100 });
  list.removeLast();
  console.dir(list, { depth: 100 });
  list.addLast(13);
  list.addLast(42);
  console.dir(list, { depth: 100 });
  list.removeFirst();
  console.dir(list, { depth: 100 });
  list.addFirst(77);
  console.dir(list, { depth: 100 });
  ```

<br/>

<h3 id="02">02. 해시테이블을 구현해보세요.</h3>

- Array 활용 & Hash Key 생성하여 작업

  ```js
  class HashTable {
    constructor() {
      this.table = [];
      this.itemLength = 0;
    }

    createHashIndex(key) {
      const uniqueNum = 17; // 소수
      if (key.length === 0) return uniqueNum;
      if (key.length === 1) return key.charCodeAt() % uniqueNum;

      const charCode = key.split('').reduce((prev, curr) => {
        const prevValue = typeof prev === 'string' ? prev.charCodeAt() : prev;
        const currValue = curr?.charCodeAt() || 0;
        return prevValue + currValue;
      });
      return charCode % uniqueNum;
    }

    setItem(key, value) {
      this.itemLength++;
      const idx = this.createHashIndex(`${key}`, this.table.length);
      if (this.table[idx]) this.table[idx].push([key, value]);
      else this.table[idx] = [[key, value]];
    }
    getItem(key) {
      let result = null;
      const idx = this.createHashIndex(`${key}`, this.table.length);
      const arrItem = this.table[idx];
      if (arrItem.length === 1) result = arrItem[0][1];
      if (arrItem.length > 1) result = arrItem.find(([vKey]) => vKey === key)[1];
      return result;
    }
  }
  ```

  ```js
  const myTable = new HashTable();
  myTable.setItem('firstName', 'Hoyoung');
  myTable.setItem('lastName', 'Son');
  myTable.setItem('age', 30);
  myTable.setItem('birth', '1993-11-17');

  console.log(myTable.getItem('firstName')); // Hoyoung
  console.log(myTable.getItem('lastName')); // Son
  console.log(myTable.getItem('age')); // 30
  console.log(myTable.getItem('birth')); // 1993-11-17

  // 같은 hashKey
  myTable.setItem('1', 'Test1');
  myTable.setItem('u', 'Test2');
  console.log(myTable.getItem('1'));
  console.log(myTable.getItem('u'));
  // -------

  console.log(myTable.table);
  ```
