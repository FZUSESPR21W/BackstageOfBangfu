import { Layout as ALayout } from 'antd';
import { useHistory } from 'react-router-dom';
import Sidebar from '../sidebar/index';

const { Content } = ALayout;

const Layout = ({ children }) => {
    const history = useHistory();
    const { pathname } = history.location;

    return (
        <ALayout>
            { pathname.indexOf("login") === -1 ? <Sidebar /> : ""}
            <Content>
                {children}
            </Content>
        </ALayout>
    );
};

export default Layout;