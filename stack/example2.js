function isValid(s) {
  if (s.length % 2 !== 0) {
    return false
  }
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i])
    } else if (stack[stack.length - 1] === '(' && s[i] === ')') {
      stack.pop()
    } else if (stack[stack.length - 1] === '{' && s[i] === '}') {
      stack.pop()
    } else if (stack[stack.length - 1] === '[' && s[i] === ']') {
      stack.pop()
    }
  }
  return !stack.length
}

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
console.log(isValid('([)]'))
console.log(isValid('{[]}'))
