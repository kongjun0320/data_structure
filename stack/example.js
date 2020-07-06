// 十进制转二进制
/*
  let decimalNum = 35
  const binaryArr = []
  let binaryResult 

  while (parseInt(decimalNum / 2) !== 0) {
    binaryArr.unshift(decimalNum % 2)
    decimalNum = parseInt(decimalNum / 2)
  }
  binaryArr.unshift(1)
  binaryResult = binaryArr.join('')
  console.log(binaryResult)
*/
// 有效括号
const khStr = '(([]))'
const khResultArr = []
let khLength = khStr.length
// 奇数情况下 一定不匹配
if (khLength % 2 === 1) {
  console.log('不合法')
  return
}

for (let i = 0; i < khLength; i++) {
  if (khStr[i] === '(' || khStr[i] === '[' || khStr[i] === '{') {
    khResultArr.unshift(khStr[i])
  } else if (khStr[i] === ')' || khStr[i] === ']' || khStr[i] === '}') {
    const top = khResultArr[0]
    // 类型匹配
    if (
      (top === '(' && khStr[i] === ')') ||
      (top === '[' && khStr[i] === ']') ||
      (top === '{' && khStr[i] === '}')
    ) {
      khResultArr.shift()
    } else {
      console.log('不合法->类型不匹配')
      return
    }
  }
}

if (khResultArr.length !== 0) {
  console.log('不合法')
  return 
}
