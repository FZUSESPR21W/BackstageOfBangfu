import { POST_TYPE } from "@/constants";

const columns = [
  { title: "序号", dataIndex: "postId", key: "postId" },
  { title: "用户", dataIndex: "userName", key: "userName" },
  { title: "帖子标题", dataIndex: "title", key: "title" },
  { title: "帖子内容", dataIndex: "content", key: "content" },
  {
    title: "论坛",
    dataIndex: "type",
    key: "type",
    render: (text) => POST_TYPE[text],
  },
  { title: "时间", dataIndex: "time", key: "time" },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
    render: (_) => "未审核",
  },
];

export { columns };
