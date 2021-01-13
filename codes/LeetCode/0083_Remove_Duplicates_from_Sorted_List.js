// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
/* 
    * 0083. Remove Duplicates from Sorted List
        Given the head of a sorted linked list, 
        delete all duplicates such that each element appears only once. Return the linked list sorted as well.

        - Example 1:
            Input: head = [1,1,2]
            Output: [1,2]

        - Example 2:
            Input: head = [1,1,2,3,3]
            Output: [1,2,3]

        -- Constraints (제약조건): 
            1) The number of nodes in the list is in the range [0, 300].
            2) -100 <= Node.val <= 100
            3) The list is guaranteed to be sorted in ascending order.       
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
    let nodeTmp = head;  
    
    while(nodeTmp !== null) {
        if (nodeTmp.next && nodeTmp.val === nodeTmp.next.val) {                   
            nodeTmp.next = nodeTmp.next.next;
        } else {
            // 이 한줄. else문안에 넣지 않았을 때는 [1,1,1] => [1,1] 이런 식으로 반환함.
            // else 문에 넣으면 [1,1,1] => [1]
            nodeTmp = nodeTmp.next; 
        }        
    }

    return head;
}

const head1 = new ListNode(1);
head1.next = new ListNode(1);
head1.next.next = new ListNode(2);

const head2 = new ListNode(1);
head2.next = new ListNode(1);
head2.next.next = new ListNode(2);
head2.next.next.next = new ListNode(3);
head2.next.next.next.next = new ListNode(3);

const head3 = new ListNode(1);
head3.next = new ListNode(1);
head3.next.next = new ListNode(1);

console.log(head1);
console.log(deleteDuplicates(head1));

console.log(head2);
console.log(deleteDuplicates(head2));

console.log(head3);
console.log(deleteDuplicates(head3));