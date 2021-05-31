const columns = [
  { title: "序号", dataIndex: "postId", key: "postId" },
  { title: "用户", dataIndex: "userName", key: "userName" },
  { title: "帖子标题", dataIndex: "title", key: "title" },
  { title: "帖子内容", dataIndex: "content", key: "content" },
  { title: "论坛", dataIndex: "type", key: "type" },
  { title: "时间", dataIndex: "time", key: "time" },
  { title: "状态", dataIndex: "status", key: "status" }
];

const data = []

for (let i = 0; i < 123; i += 1) {
  data.push({
    postId: i,
    userName: 'zzz',
    title: 'xxx',
    content: 'xxx',
    type: 0,
    time: '2018/7/17',
    status: 0
  })
}

export { columns, data };
