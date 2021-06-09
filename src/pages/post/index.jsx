import React, { useEffect, useState } from "react";
import { ThemeHeading, ThemeTable } from "@/components";
import { columns } from "./constants";
import { setClsPrefixHOC } from "../../utils/setClsPrefixHoc";
import { pageClsPrefixs } from "../../constants";
import { Button, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { auditPost, searchPost, deletePost } from "./modules/actions";
import delay from "delay";

import "./index.less";

const setClsPrefix = setClsPrefixHOC(pageClsPrefixs.Post);

const Post = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.getIn(["post", "posts"]).toJS());
  const total = useSelector((state) => state.getIn(["post", "totalNum"]));
  const [current, setCurrent] = useState(1);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const getPostData = async () => {
    setLoading(true);
    await dispatch(searchPost(value, current));
    await delay(1000);
    setLoading(false);
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await dispatch(searchPost("", 1));
      setLoading(false);
    };
    getData();
  }, [dispatch]);

  // search
  const handleSearch = (value) => {
    setValue(value);
    setCurrent(1);
    getPostData();
  };

  // action
  const handleAudit = async (postId) => {
    const res = await dispatch(auditPost(postId));
    if (res === true) {
      getPostData();
    } else {
      message.warn("审核失败");
    }
  };

  const handleDelete = async (postId) => {
    const res = await dispatch(deletePost(postId));
    if (res === true) {
      getPostData();
    } else {
      message.warn("删除失败");
    }
  };

  const actionColumns = {
    title: "操作",
    dataIndex: "action",
    render: (_, record) => (
      <>
        <Button
          onClick={() => handleAudit(record.postId)}
          type="primary"
          className={setClsPrefix("audit-btn")}
        >
          通过审核
        </Button>
        <Button onClick={() => handleDelete(record.postId)} type="primary">
          删除
        </Button>
      </>
    ),
  };

  // pagination
  const handleChange = (current) => {
    setCurrent(current);
    getPostData();
  };

  return (
    <div className={setClsPrefix("container")}>
      <ThemeHeading title="帖子管理" />
      <ThemeTable
        columns={[...columns, actionColumns]}
        expandable={{
          expandedRowRender: (record) => (
            <div className={setClsPrefix("expand")}>
              <div className={setClsPrefix("expand-des")}>帖子内容:</div>
              <div>{record.content}</div>
            </div>
          ),
          expandRowByClick: true,
          expandIconColumnIndex: -1,
        }}
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

export default Post;
