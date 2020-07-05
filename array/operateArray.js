/* 数组的基本操作
const names = ['jack', 'tom', 'mike']
names[7] = 'mary'
console.log(names) // [ 'jack', 'tom', 'mike', <4 empty items>, 'mary' ]
console.log(names[5]) // undefined
*/

// push/unshift/shift/pop
const sports = ['basketball', 'football', 'tennis']
sports.push('baseball')
console.log('push->', sports)
sports.unshift('volleyball')
console.log('unshift->', sports)
sports.pop()
console.log('pop->',sports)
sports.shift()
console.log('shift->',sports)

