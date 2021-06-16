import { POST_TYPE, STATUS_TYPE } from "@/constants";
import { sliceWords } from "@/utils";
import dayjs from 'dayjs'

const columns = [
  { title: "序号", dataIndex: "commentId", key: "commentId" },
  { title: "用户", dataIndex: "userName", key: "userName" },
  {
    title: "帖子标题",
    dataIndex: "postTitle",
    key: "postTitle",
    render: (text) => sliceWords(text, 20),
  },
  {
    title: "评论内容",
    dataIndex: "content",
    key: "content",
    render: (text) => sliceWords(text, 20),
  },
  {
    title: "论坛",
    dataIndex: "postType",
    key: "postType",
    render: (text) => POST_TYPE[text],
  },
  {
    title: "时间",
    dataIndex: "time",
    key: "time",
    render: (text) => dayjs(text).format("YYYY-MM-DD"),
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
    render: (text) => STATUS_TYPE[text],
  },
];

export { columns };
