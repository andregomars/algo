/*
24. Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

 

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head.next || !head.next.next) {
    return head;
  }

  var helper = function(a, b) {
    const temp = a;
    a.next = b.next;
    b.next = temp.next;

    if (temp.next && temp.next.next) {
      helper(temp.next, temp.next.next);
    }
  }

  helper(head.next, head.next.next);
  return head;
}

var test = function() {

  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

  function printVals(head) {
    var cur = head;
    var vals = [];
    while(cur.next) {
      vals.push(cur.next.val)
      cur = cur.next;
    }
    console.log(vals)
  }

  const n4 = new ListNode(4, null);
  const n3 = new ListNode(3, n4);
  const n2 = new ListNode(2, n3);
  const n1 = new ListNode(1, n2);
  const head = new ListNode(null, n1);

  printVals(head)

  const ret = swapPairs(head);
  printVals(ret)

}

module.exports = test;