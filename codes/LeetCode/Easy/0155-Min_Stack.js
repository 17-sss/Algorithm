// https://leetcode.com/problems/min-stack/
// 155. Min Stack

// 2차시, 통과 성공
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push = (val) => {
        const min = this.getMin();
        this.stack.push(val);
        !this.minStack.length || min > val
            ? this.minStack.push(val)
            : this.minStack.push(min);
    };
    pop = () => {
        this.minStack.pop();
        return this.stack.pop();
    };
    top = () => this.stack[this.stack.length - 1];
    getMin = () => this.minStack[this.minStack.length - 1] || 0;
}

// -----------

// 1차시, 통과 성공

// 1) Class 문법
class MinStack {
    constructor() {
        this.stack = [];
    }
    push = (val) => this.stack.push(val);
    pop = () => this.stack.pop();
    top = () => this.stack[this.stack.length - 1];
    getMin = () => Math.min(...this.stack);
}

// 2) Prototype 문법
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return stack[stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return Math.min(...stack);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
