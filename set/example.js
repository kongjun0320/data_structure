const intersection = function (num1, num2) {
  return [...new Set(num1)].filter((n) => num2.includes(n))
}

 const result = intersection([1, 1, 2, 2], [2, 2])
