---
date: '2022-03-08'
title: '[Algorithm] 손코딩 연습 - 스택, 큐'
categories: ['Algorithm']
options: { hide: true }
---

# [Algorithm] 손코딩 연습

## 스택, 큐 (Stack, Queue)

<div style="margin: 8px 0;">
  <h3 style="font-weight: 700">목차</h3>
  <a href="#00">00. 개념 요약</a></br>
  <a href="#01">01. 스택을 구현해보세요.</a></br>
  <a href="#02">02. 큐를 구현해보세요.</a></br>
  <hr/>
</div>

<h3 id="00">00. 개념 요약</h3>

- **Stack**  
  - FILO (First In Last Out)
  - 먼저 들어온 자료가 나중에 나가는 구조
  - "접시가 쌓여있을 때 생각하기"

- **Queue**  
  - FIFO(First In First Out)
  - 먼저 들어온 자료가 먼저 나가는 구조
  - 놀이동산에서 순서대로 들어가듯.

**[참고자료]**

- [Stack, Queue 설명과 차이](https://velog.io/@srparkgogo/Stack-Queue-설명과-차이)
- [[javascript] Queue 와 Stack 구현](https://sub0709.tistory.com/147)

<br/>

<h3 id="01">01. 스택을 구현해보세요.</h3>

```js
function Stack() {
  this.items = [];
}

Stack.prototype.push = function (...value) {
  this.items.push(...value);
};
Stack.prototype.pop = function () {
  return this.items.pop();
};
Stack.prototype.length = function () {
  return this.items.length;
};

const stack = new Stack();
stack.push(1, 2, 3, 4);
console.log(stack.items);
stack.pop();
console.log(stack.items);
```

<br/>

<h3 id="02">02. 큐를 구현해보세요.</h3>

```js
function Queue() {
  this.items = [];
}

Queue.prototype.enqueue = function (...value) {
  this.items.push(...value);
};

Queue.prototype.dequeue = function () {
  return this.items.shift();
};

Queue.prototype.length = function () {
  return this.items.length;
};

const queue = new Queue();
queue.enqueue(1, 2, 3, 4);
console.log(queue.items);
queue.dequeue();
console.log(queue.items);
```
