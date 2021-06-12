import { Menu } from 'antd';
import {
    CommentOutlined,
    CarryOutOutlined,
    UserOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import "./index.less";

const { SubMenu } = Menu;


const Sidebar = (props) => {
    const history = useHistory();

    const handleItemClick = (item) => {
        const { key } = item;
        if (key === "login") {
            localStorage.clear();
        }

        history.replace(`${key}`);
    };

    return (
        <div className="sidebar">
            <Menu
                defaultSelectedKeys={['post']}
                defaultOpenKeys={['1']}
                selectedKeys={history.location.pathname}
                mode="inline"
                theme="dark"
            >
                <SubMenu key="1" icon={<CommentOutlined />} title="论坛管理">
                    <Menu.Item key="/post" onClick={handleItemClick}>
                        帖子管理
                    </Menu.Item>
                    <Menu.Item key="/comment" onClick={handleItemClick}>
                        评论管理
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="/task" icon={<CarryOutOutlined />} onClick={handleItemClick}>
                    任务管理
                </Menu.Item>
                <Menu.Item key="3" icon={<UserOutlined />} onClick={handleItemClick}>
                    用户管理
                </Menu.Item>
                <Menu.Item key="/login" icon={<LogoutOutlined />} onClick={handleItemClick}>
                    退出登陆
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default Sidebar;