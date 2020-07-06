// 栈是一个先进后出的数据结构
// 入栈 出栈
const stack = []
// 入栈 push
stack.push('jack')
stack.push('tom')
// console.log(stack) // [ 'jack', 'tom' ]
// 出栈 pop
console.log(stack.pop()) // 'tom'
console.log(stack) // [ 'jack' ]
console.log(stack.pop()) // 'jack'
