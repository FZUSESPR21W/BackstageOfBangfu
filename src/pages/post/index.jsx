import React from "react";
import { ThemeTable } from "../../components";
import { columns, data } from "./constants";

const Post = () => {
  const handleSearch = (value) => {
    console.log(value);
  };
  return (
    <ThemeTable
      columns={columns}
      data={data}
      current={1}
      onSearch={handleSearch}
    />
  );
};

export default Post;
