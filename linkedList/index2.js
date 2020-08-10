const a = { value: 'a' }
const b = { value: 'b' }
const c = { value: 'c' }
const d = { value: 'd' }

a.next = b
b.next = c
c.next = d

// 遍历链表

// let p = a
// while(p){
//   console.log(p.value)
//   p = p.next
// }

// 插入

const e = { value: 'e' }
c.next = e
e.next = d

// 删除
c.next = d

console.log(a)
