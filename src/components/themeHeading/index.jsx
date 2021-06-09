import React from "react";
import './index.less';
import { componentClsPrefixs } from "../../constants";
import { setClsPrefixHOC } from "../../utils/setClsPrefixHoc";

const setClsPrefix = setClsPrefixHOC(componentClsPrefixs.ThemeHeading);

const ThemeHeading = (props) => {
  const { title } = props;
  return (
    <div className={setClsPrefix()}>
      <div className={setClsPrefix("heading")}>
        <h1 className={setClsPrefix("title")}>{title}</h1>
      </div>
    </div>
  );
};

export default ThemeHeading;
