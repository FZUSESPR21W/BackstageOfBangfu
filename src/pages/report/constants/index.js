import { sliceWords } from "@/utils";

const columns = [
  { title: "序号", dataIndex: "reportId", key: "reportId" },
  { title: "被举报用户", dataIndex: "reported", key: "reported" },
  { title: "举报用户", dataIndex: "reporter", key: "reporter" },
  {
    title: "标题",
    dataIndex: "title",
    key: "title",
    render: (text) => sliceWords(text, 20),
  },
  {
    title: "举报内容",
    dataIndex: "content",
    key: "content",
    render: (text) => sliceWords(text, 20),
  },
  {
    title: "分类",
    dataIndex: "type",
    key: "type",
    render: (text) => text,
  },
  { title: "时间", dataIndex: "time", key: "time" },
];

export { columns };
