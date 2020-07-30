const tree = {
  val: '浙江省',
  children: [
    {
      val: '杭州市',
      children: [
        {
          val: '西湖区',
          children: [],
        },
        {
          val: '滨江区',
          children: [],
        },
      ],
    },
    {
      val: '宁波市',
      children: [
        {
          val: '象山县',
          children: [],
        },
        {
          val: '北仑区',
          children: [],
        },
      ],
    },
  ],
}

// 深度优先遍历
const dfs = (root) => {
  console.log(root.val)
  root.children.forEach(dfs)
}
// dfs(tree)
// 广度优先遍历
const bfs = (root) => {
  const q = [root]
  while (q.length > 0) {
    const n = q.shift()
    console.log(n.val)
    n.children.forEach((child) => {
      q.push(child)
    })
  }
}

bfs(tree)
