import React from "react";
import { Table, Input } from "antd";
import "./index.less";
import { componentClsPrefixs } from "../../constants";
import { setClsPrefixHOC } from "../../utils/setClsPrefixHoc";

const setClsPrefix = setClsPrefixHOC(componentClsPrefixs.ThemeTable);
const { Search } = Input;

const themeTable = (props) => {
  const {
    total,
    current,
    columns,
    data,
    expandable,
    placeholder,
    onSearch,
    onChange,
    loading,
  } = props;
  return (
    <>
      <Search
        className={setClsPrefix("search")}
        placeholder={placeholder}
        enterButton="筛选"
        onSearch={onSearch}
        loading={loading}
      />
      <Table
        rowKey="postId"
        loading={loading}
        className={setClsPrefix("table")}
        columns={columns}
        expandable={expandable}
        dataSource={data}
        pagination={{
          showTotal: (total) => `一共有 ${total} 条`,
          onChange,
          pageSize: 10,
          total,
          current,
          showSizeChanger: false,
        }}
      />
    </>
  );
};

export default themeTable;
