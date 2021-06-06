// https://leetcode.com/problems/search-a-2d-matrix/
// 74. Search a 2D Matrix

// 2차시, Binary Search. 처음 푼 것과 시간 & 공간 복잡도는 유사한 듯.. (더 느릴수도)
const searchMatrix = (matrix, target) => {
    const arrTmp = matrix.reduce((arr, value) => (arr.push(...value), arr), []);

    let left = 0;
    let right = arrTmp.length - 1;
    while (left <= right) {
        let pivot = Math.floor((left + right) / 2);

        if (arrTmp[pivot] === target) return true;
        else if (arrTmp[pivot] > target) right -= 1;
        else left += 1;
    }

    return false;
};

searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3);

// 1차시, 통과 성공 (indexOf 활용)
/*
const searchMatrix = (matrix, target) => {
    const arrTmp = matrix.reduce((arr, value) => {
        arr.push(...value);
        return arr;
    }, []);

    return arrTmp.indexOf(target) > -1;
};
*/