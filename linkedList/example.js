//  请编写一个函数，使其可以删除某个链表中的（非末尾）节点
// const deleteNode = function(node){
//   node.val = node.next.val
//   node.next = node.next.next
// }
// 反转一个链表
// const reverseList = function(head){
//   let p1 = head
//   let p2 = null
//   while(p1){
//     const temp = p1.next
//     p1.next = p2
//     // p2指针往后走
//     p2 = p1
//     // p1指针往后走
//     p1 = temp
//   }
// }

// 两数相加 (1,2,3,7)+(6,5,4,7) => (7,7,8,4)
// const addTwoNumbers = function (l1, l2) {
//   const l3 = new ListNode(0)
//   let p1 = l1
//   let p2 = l2
//   let p3 = l3
//   let carry = 0
//   while (p1 || p2) {
//     const v1 = p1 ? p1.val : 0
//     const v2 = p2 ? p2.val : 0
//     const val = v1 + v2 + carry
//     carry = Math.floor(val / 10)
//     p3.next = new ListNode(val % 10)

//     if (p1) {
//       p1 = p1.next
//     }
//     if (p2) {
//       p2 = p2.next
//     }
//     p3 = p3.next
//   }
//   if (carry) {
//     p3.next = new ListNode(carry)
//   }
//   return l3.next
// }

// 删除排序列表中的重复元素
// const deleteDuplicate = function (head) {
//   let p = head
//   while (p && p.next) {
//     if ((p.val = p.next.val)) {
//       p.next = p.next.next
//     }else{
//       p = p.next
//     }
//   }
//   return head
// }

// 环形链表
const hasCycle = function (head) {
  let p1 = head
  let p2 = head
  while (p1 && p2 && p2.next) {
    p1 = p1.next
    p2 = p2.next.next
    if (p1 === p2) {
      return true
    }
  }
  return false
}
