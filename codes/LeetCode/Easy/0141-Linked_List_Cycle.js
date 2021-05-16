// https://leetcode.com/problems/linked-list-cycle/
/* 
    * 0014. Longest Common Prefix
        Given head, the head of a linked list, determine if the linked list has a cycle in it.
        There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
        Internally, pos is used to denote the index of the node that tail's next pointer is connected to. 
        [Note] that pos is not passed as a parameter.
        Return true if there is a cycle in the linked list. Otherwise, return false.
    ```
        주어진 연결리스트에서, 순환이 있는지 확인해라
        주어진 연결리스트 안의 순환을 나타내기위해, 
        tail 부분에서 연결된 포지션을 정수로 나타내는 것을 사용한다. 
        만약 포지션이 -1 이면, 연결리스트에 순환부가 없는 것이다. 
        (pos 포지션은 페이크고, 그냥 bool 순환여부 확인하면 됨)
    ```

        - Example 1:
            Input: head = [3,2,0,-4], pos = 1
            Output: true
            Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

        - Example 2:
            Input: head = [1,2], pos = 0
            Output: true
            Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
        
        - Example 3:
            Input: head = [1], pos = -1
            Output: false
            Explanation: There is no cycle in the linked list.
        
        -- Constraints (제약조건): 
            1) The number of the nodes in the list is in the range [0, 104].
            2) -105 <= Node.val <= 105
            3) pos is -1 or a valid index in the linked-list.
        
        -- Follow up (후속 조치): 
            Can you solve it using O(1) (i.e. constant) memory? (시간복잡도 0(1)로 풀어보래)
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null; 
 * }
 */
class LinkNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
    if (!head) return false;
    let [nodeTmp, nodeTmp2x] = [head, head];

    while (nodeTmp2x) {
        if (!nodeTmp.next) return false;
        if (!nodeTmp2x.next || !nodeTmp2x.next.next) return false;

        nodeTmp = nodeTmp.next;
        nodeTmp2x = nodeTmp2x.next.next;

        if (nodeTmp === nodeTmp2x) return true;
    }

    return false;
};

// --------
const head1 = new LinkNode(3);
head1.next = new LinkNode(2);
head1.next.next = new LinkNode(0);
head1.next.next.next = new LinkNode(-4);
head1.next.next.next.next = head1.next;

const head2 = new LinkNode(1);
head2.next = new LinkNode(2);
head2.next.next = head2;

const head3 = new LinkNode(1);

// console.log(head1);
// console.log(head2);
// console.log(head3);

console.log(hasCycle(head1));
console.log(hasCycle(head2));
console.log(hasCycle(head3));