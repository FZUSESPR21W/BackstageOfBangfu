import { TASK_TYPE } from "@/constants";
import { sliceWords } from "@/utils";

const columns = [
  { title: "序号", dataIndex: "taskId", key: "taskId" },
  { title: "用户", dataIndex: "userName", key: "userName" },
  {
    title: "任务标题",
    dataIndex: "title",
    key: "title",
    render: (text) => sliceWords(text, 20),
  },
  {
    title: "任务内容",
    dataIndex: "content",
    key: "content",
    render: (text) => sliceWords(text, 20),
  },
  {
    title: "分类",
    dataIndex: "type",
    key: "type",
    render: (text) => TASK_TYPE[text],
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
