import { Input, Button } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import imageUrl from "../../assets/image/login.png";
import "./index.less";
import { useState } from 'react';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleClick = () => {
        console.log("click!!!");
    };

    return (
        <div className="login">
            <div id="content">
                <div id="content_logo">
                    <img src={imageUrl} alt="登陆图标" />
                </div>
                <div id="content_title">“帮福”后台管理系统</div>
                <div id="content_input">
                    <Input
                        value={email}
                        size="large"
                        placeholder="请输入邮箱"
                        prefix={<UserOutlined />}
                        onChange={handleEmailChange} />
                    <Input.Password
                        value={password}
                        size="large"
                        placeholder="请输入密码"
                        prefix={<LockOutlined />}
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        onChange={handlePasswordChange} />
                </div>
                <div id="btn">
                    <Button type="primary" size="large" onClick={handleClick}>
                        登陆
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default Login;