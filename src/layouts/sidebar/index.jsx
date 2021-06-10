import { Menu } from 'antd';
import {
    CommentOutlined,
    CarryOutOutlined,
    UserOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import "./index.less";

const { SubMenu } = Menu;


const Sidebar = (props) => {

    return (
        <div className="sidebar">
            <Menu
                defaultSelectedKeys={['sub1']}
                defaultOpenKeys={['1']}
                mode="inline"
                theme="dark"
            >
                <SubMenu key="1" icon={<CommentOutlined />} title="论坛管理">
                    <Menu.Item key="sub1"></Menu.Item>
                    <Menu.Item key="sub2">评论管理</Menu.Item>
                </SubMenu>
                <Menu.Item key="2" icon={<CarryOutOutlined />}>
                    任务管理
                </Menu.Item>
                <Menu.Item key="3" icon={<UserOutlined />}>
                    用户管理
                </Menu.Item>
                <Menu.Item key="4" icon={<LogoutOutlined />}>
                    退出登陆
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default Sidebar;