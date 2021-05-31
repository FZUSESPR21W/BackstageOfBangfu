import React from "react";
import { Table, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

const themeTable = (props) => {
  const { columns, data, expandable, placeholder, onSearch } = props;
  return (
    <>
      <Search
        placeholder={placeholder}
        enterButton="筛选"
        onSearch={onSearch}
      />
      <Table
        columns={columns}
        expandable={expandable}
        dataSource={data}
        pagination={{
          pageSize: 10,
          total: data && data.length,
          showSizeChanger: false,
        }}
      />
    </>
  );
};

export default themeTable;
