// https://leetcode.com/problems/same-tree/
// Same Tree
/* 
    * 문제 메모
        (약간 참고함..)
        - 이거 DFS 문제인가??
        - 인자로 들어오는 값이 "문자열"인줄 알았는데 TreeNode가 안보이는데에 정의되어 있는 듯.
    * 문제 풀이
        1. 먼저 p, q가 falsy한 값이라면 둘다 같은 거니까 true 반환
        2. p, q 중 둘 중 하나라도 falsy한 값이면 같지 않으니 false
        3. p.val과 q.val의 값이 같지 않으면 false
        4. 그 후엔 전부 계속해서 
            각 TreeNode의 left, right값들을 비교하기 위해 재귀를 돌려줌.
            예) `isSameTree(p.left, q.left)`
                - 이렇게 한다면,
                    isSameTree의
                        매개변수 p는 p.left가 되고
                        매개변수 q는 q.left가 되어 콜스택에 쌓임
                        (집 문 열고 들어와서 방 문열고 들어가는 것과 같음)
                        (또 재귀한다면 현재 들어온 방에서 또 다른 방으로 들어가는 것)
*/

// 1차시, 통과 성공 (68ms, faster than 97.99%)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function (p, q) {
    if (!p && !q) return true;
    else if (!p || !q) return false;
    else if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

console.log(isSameTree('[1,2,3]', '[1,2,null]')); // 실행은 제대로 안될거임

/* 뻘짓
const isSameTree = (p, q) =>
    !p && !q
        ? true
        : !p || !q
        ? false
        : p.val !== q.val
        ? false
        : isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
*/
