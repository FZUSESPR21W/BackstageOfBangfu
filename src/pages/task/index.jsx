import React, { useEffect, useState } from "react";
import { ThemeHeading, ThemeTable } from "@/components";
import { columns } from "./constants";
import { setClsPrefixHOC } from "../../utils/setClsPrefixHoc";
import { pageClsPrefixs } from "../../constants";
import { Button, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { auditTask, searchTask, deleteTask } from "./modules/actions";

import "./index.less";

const setClsPrefix = setClsPrefixHOC(pageClsPrefixs.Task);

const Task = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.getIn(["task", "posts"]).toJS());
  const total = useSelector((state) => state.getIn(["task", "totalNum"]));
  const [current, setCurrent] = useState(1);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const getTaskData = async ({ page, text } = {}) => {
    setLoading(true);
    await dispatch(searchTask(typeof text !== "undefined" ? text : value, page || current));
    setLoading(false);
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await dispatch(searchTask("", 1));
      setLoading(false);
    };
    getData();
  }, [dispatch]);

  // search
  const handleSearch = (value) => {
    setValue(value);
    setCurrent(1);
    getTaskData({ page: 1, text: value });
  };

  // action
  const handleAudit = async (taskId) => {
    const res = await dispatch(auditTask(taskId));
    if (res === true) {
      getTaskData();
    } else {
      message.warn("审核失败");
    }
  };

  const handleDelete = async (taskId) => {
    const res = await dispatch(deleteTask(taskId));
    if (res === true) {
      getTaskData();
    } else {
      message.warn("删除失败");
    }
  };

  const actionColumns = {
    title: "操作",
    dataIndex: "action",
    width: 240,
    render: (_, record) => (
      <>
        <Button
          onClick={() => handleAudit(record.taskId)}
          type="primary"
          className={setClsPrefix("audit-btn")}
        >
          通过审核
        </Button>
        <Button onClick={() => handleDelete(record.taskId)} type="primary">
          删除
        </Button>
      </>
    ),
  };

  // pagination
  const handleChange = (current) => {
    setCurrent(current);
    getTaskData({ page: current });
  };

  return (
    <div className={setClsPrefix("container")}>
      <ThemeHeading title="任务管理" />
      <ThemeTable
        columns={[...columns, actionColumns]}
        expandable={{
          expandedRowRender: (record) => (
            <div className={setClsPrefix("expand")}>
              <div className={setClsPrefix("expand-des")}>任务内容:</div>
              <div>{record.content}</div>
            </div>
          ),
        }}
        rowKey="taskId"
        data={data}
        total={total}
        current={current}
        onSearch={handleSearch}
        onChange={handleChange}
        loading={loading}
      />
    </div>
  );
};

export default Task;
