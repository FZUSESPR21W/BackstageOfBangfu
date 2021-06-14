import { Layout as ALayout } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../sidebar/index";

const { Content } = ALayout;

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const [showSidebar, setShowSideBar] = useState(false);

  useEffect(() => {
    console.log(pathname);
    setShowSideBar(pathname.indexOf("login") === -1);
  }, [pathname]);

  return (
    <ALayout>
      {showSidebar && <Sidebar />}
      <Content>{children}</Content>
    </ALayout>
  );
};

export default Layout;
