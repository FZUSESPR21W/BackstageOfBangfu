import React from "react";
import { ThemeTable } from "../../components";
import { columns, data } from "./constants";
import './index.less'

const Post = () => {
  const handleSearch = (value) => {
    console.log(value);
  };
  return (
    <>
      <span className="red">11</span>
      <ThemeTable
        columns={columns}
        data={data}
        current={1}
        onSearch={handleSearch}
      />
    </>
  );
};

export default Post;
