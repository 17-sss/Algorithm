// https://leetcode.com/problems/design-hashmap
// 706. Design HashMap

// 2차시, 통과 성공 (ES6 Classes)
/*
    시간복잡도: 180 ms / faster than 99.51%
    공간복잡도: 48.7 MB / less than 54.22%
*/
class MyHashMap {
    hashMap = {};
    put = (key, value) => (this.hashMap[key] = value);
    get = (key) =>
        typeof this.hashMap[key] === 'undefined' ||
        typeof this.hashMap[key] === 'null'
            ? -1
            : this.hashMap[key];
    remove = (key) => delete this.hashMap[key];
}

// -----------

// 1차시, 통과 성공 (Prototype)
/*
    시간복잡도: 196ms / faster than 81.66%
    공간복잡도: 49.1 MB / less than 43.02% 
*/

/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
    hashMap = {};
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    hashMap[key] = value;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    const result = hashMap[key];
    return typeof result === 'undefined' || typeof result === 'null'
        ? -1
        : result;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    delete hashMap[key];
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
