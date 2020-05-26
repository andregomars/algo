/*
24. Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

 

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.


1-2-3-4

1.next=2.next
2.next=1
=> 2-1-3-4

1.next=4
3.next=4.next
4.next=3
=> 2-1-4-3

h.next = b
a.next=b.next
b.next=a

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  head = new ListNode(null, head)
  if (!head.next || !head.next.next) {
    return head.next;
  }

  var helper = function(pre, a, b) {
    pre.next = b
    a.next=b.next
    b.next=a

    if (a.next && a.next.next) {
      helper(a, a.next, a.next.next);
    }
  }

  helper(head, head.next, head.next.next);
  return head.next;
}

var test = function() {
  const head = arrayToLinked([1,2,3,4]);

  console.log('head values', linkedToArray(head));

  const ret = swapPairs(head);
  console.log(linkedToArray(ret));

}

var arrayToLinked = function(arr) {
  if (!arr || arr.length < 1) return null;

  let head = new ListNode(arr[0], null);
  if (arr.length === 1) return head;

  let cur = head;
  for (let k of arr.slice(1)) {
    cur.next = new ListNode(k, null);
    cur = cur.next;
  }

  return head;
};

var linkedToArray = function(head) {
  var vals = [];
  while(head) {
    vals.push(head.val)
    head = head.next;
  }
  return vals;
};

module.exports.test = test;
module.exports.ListNode = ListNode;
module.exports.arrayToLinked = arrayToLinked;
module.exports.linkedToArray = linkedToArray;
module.exports.swapPairs = swapPairs;