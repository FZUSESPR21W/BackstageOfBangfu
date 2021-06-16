import React, { useEffect, useState } from "react";
import { ThemeHeading, ThemeTable } from "@/components";
import { columns } from "./constants";
import { setClsPrefixHOC } from "../../utils/setClsPrefixHoc";
import { pageClsPrefixs } from "../../constants";
import { Button, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { auditComment, searchComment, deleteComment } from "./modules/actions";

import "./index.less";

const setClsPrefix = setClsPrefixHOC(pageClsPrefixs.Comment);

const Comment = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.getIn(["comment", "posts"]).toJS());
  const total = useSelector((state) => state.getIn(["comment", "totalNum"]));
  const [current, setCurrent] = useState(1);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const getCommentData = async ({ page, text } = {}) => {
    setLoading(true);
    await dispatch(
      searchComment(typeof text !== "undefined" ? text : value, page || current)
    );
    setLoading(false);
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await dispatch(searchComment("", 1));
      setLoading(false);
    };
    getData();
  }, [dispatch]);

  // search
  const handleSearch = (value) => {
    setValue(value);
    setCurrent(1);
    getCommentData({ page: 1, text: value });
  };

  // action
  const handleAudit = async (commentId) => {
    const res = await dispatch(auditComment(commentId));
    if (res === true) {
      getCommentData();
    } else {
      message.warn("审核失败");
    }
  };

  const handleDelete = async (commentId) => {
    const res = await dispatch(deleteComment(commentId));
    if (res === true) {
      getCommentData();
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
          onClick={() => handleAudit(record.commentId)}
          type="primary"
          className={setClsPrefix("audit-btn")}
        >
          通过审核
        </Button>
        <Button onClick={() => handleDelete(record.commentId)} type="primary">
          删除
        </Button>
      </>
    ),
  };

  // pagination
  const handleChange = (current) => {
    setCurrent(current);
    getCommentData({ page: current });
  };

  return (
    <div className={setClsPrefix("container")}>
      <ThemeHeading title="评论管理" />
      <ThemeTable
        columns={[...columns, actionColumns]}
        expandable={{
          expandedRowRender: (record) => (
            <div className={setClsPrefix("expand")}>
              <div className={setClsPrefix("expand-des")}>评论内容:</div>
              <div>{record.content}</div>
            </div>
          ),
        }}
        rowKey="commentId"
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

export default Comment;
