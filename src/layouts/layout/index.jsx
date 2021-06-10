import { Layout as ALayout } from "antd";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "../sidebar/index";

const { Content } = ALayout;

const Layout = ({ children }) => {
  const history = useHistory();
  const [showSidebar, setShowSideBar] = useState(false);
  useEffect(() => {
    console.log(history.location.pathname)
    setShowSideBar(history.location.pathname.indexOf("login") === -1);
  }, [history]);
  return (
    <ALayout>
      {showSidebar && <Sidebar />}
      <Content>{children}</Content>
    </ALayout>
  );
};

export default Layout;
