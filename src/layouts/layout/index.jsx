import { Layout as ALayout } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../sidebar/index";

const { Content, Sider } = ALayout;

const Layout = ({ children }) => {
    const { pathname } = useLocation();
    const [showSidebar, setShowSideBar] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        console.log(pathname)
        setShowSideBar(pathname.indexOf("login") === -1);
    }, [pathname]);

    const hanldeCollapse = (collapsed) => {
        setCollapsed(collapsed);
    }

    return (
        <ALayout className="alayout">
            {showSidebar &&
                <Sider collapsible collapsed={collapsed} onCollapse={hanldeCollapse}>
                    <Sidebar />
                </Sider>
            }

            <Content>{children}</Content>
        </ALayout>
    );
};

export default Layout;
