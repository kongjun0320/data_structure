// 最近的请求次数
const RecentCounter = function () {
  this.q = []
}
RecentCounter.prototype.ping = function (t) {
  this.q.push(t)
  while (this.q[0] < t - 3000) {
    this.q.shift()
  }
  return this.q.length
}

const rc = new RecentCounter()
const params = [[1], [100], [3001], [3002]]
params.forEach((item) => {
  console.log(rc.ping(item[0]))
})
