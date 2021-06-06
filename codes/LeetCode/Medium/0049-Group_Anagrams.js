// https://leetcode.com/problems/group-anagrams/
// 49. Group Anagrams, Anagram 검색해보면 암! (Listen ==> Silent)

// 2차시, 통과 성공 (이러나 저러나..)
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
    const listMap = {};
    const AT = new AlphaTable();

    let nLoop = 0;
    while (nLoop < strs.length) {
        const currStr = strs[nLoop];
        const tmpMap = AT.createAlphaMap();

        for (let i = 0; i < currStr.length; i++) {
            const tmpChar = currStr[i];
            tmpMap[tmpChar]++;
        }
        const strKey = AT.createAlphaNumKey(tmpMap);

        if (isDuplicateKey(listMap, strKey)) 
            listMap[strKey].push(currStr);
        else listMap[strKey] = [currStr];

        nLoop++;
    }
    return Object.values(listMap);
};

const isDuplicateKey = (object, key) => Object.keys(object).indexOf(key) > -1;
class AlphaTable {
    constructor() {
        // this.nStartUpperCase = 65;
        this.nStartLowerCase = 97;
        this.alphaRange = 25;
    }
    createAlphaMap() {
        const result = {};
        const max = this.nStartLowerCase + this.alphaRange;
        for (let i = this.nStartLowerCase; i <= max; i++) {
            const alpha = String.fromCharCode(i);
            result[alpha] = 0;
        }

        return result;
    }

    createAlphaNumKey = (object) => {
        return Object.keys(object).reduce((strResult, key) => {
            if (!object[key]) return strResult;
            strResult += (key + object[key]);
            return strResult;
        }, '');
    };
}

groupAnagrams(['aba', 'cbc', 'baa', 'adc', 'ccd', 'bb']);

// 1차시, 통과 성공 (했으나 끔찍)
// 시간: 5372 ms(5.02%)	| 공간: 57.7  MB( 5.02%)
/*
const calcAlphaCnt = (arrStr, searchChar) =>
    arrStr.reduce((cnt, currChar) => (currChar === searchChar && cnt++, cnt), 0);
const isDuplicateKey = (object, key) => Object.keys(object).indexOf(key) > -1;
const createSortedObjectKey = (object) => {
    const result = {};
    const keys = Object.keys(object).sort();

    keys.forEach((key) => {
        result[key] = object[key];
    });
    return result;
};
const createObjectValueKey = (object) => Object.keys(object).reduce((result, key) => (result += (key + object[key]), result), '');

const groupAnagrams = (strs) => {
    const listMap = {};

    let nLoop = 0;
    while (nLoop < strs.length) {
        const currStr = strs[nLoop];
        const arrCurrStr = currStr.split('');

        const tmpMap = {};
        for (let i = 0; i < arrCurrStr.length; i++) {
            const tmpChar = arrCurrStr[i];
            if (isDuplicateKey(tmpMap, tmpChar)) continue;

            const alpCnt = calcAlphaCnt(arrCurrStr, tmpChar);
            tmpMap[tmpChar] = alpCnt;
        }

        const strKey = createObjectValueKey(createSortedObjectKey(tmpMap));

        if (isDuplicateKey(listMap, strKey)) listMap[strKey].push(currStr);
        else listMap[strKey] = [currStr];

        nLoop++;
    }

    return Object.values(listMap);
};

groupAnagrams(['aba', 'cbc', 'baa', 'adc', 'ccd', 'bb']);
*/
