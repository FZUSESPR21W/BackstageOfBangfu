import { sliceWords } from "@/utils";
import { REPORT_TYPE } from "@/constants"
import dayjs from 'dayjs'

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
    render: (text) => REPORT_TYPE[text],
  },
  {
    title: "时间",
    dataIndex: "time",
    key: "time",
    render: (text) => dayjs(text).format("YYYY-MM-DD"),
  },
];

export { columns };
