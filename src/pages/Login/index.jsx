import { Form, Input, Button } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import imageUrl from "../../assets/image/login.png";
import "./index.less";
import styles from "./index.module.less";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

const Login = (props) => {
  const history = useHistory();

  const handleFormFinish = async (value) => {
    const { email, password } = value;
    const res = await axios.post(`/login`, qs.stringify({
      email,
      psw: password
    }));

    const { error, token } = res.data;
    if (error === 0) {
      localStorage.setItem("token", token);
      history.replace("/post");
    }
  };

  return (
    <div className={styles.scope}>
      <div className="login">
        <div id="content">
          <div id="content_logo">
            <img src={imageUrl} alt="登陆图标" />
          </div>
          <div id="content_title">“帮福”后台管理系统</div>
          <Form id="content_input" onFinish={handleFormFinish}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "请填写邮箱!" }]}
            >
              <Input
                size="large"
                placeholder="请输入邮箱"
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "请填写密码!" }]}
            >
              <Input.Password
                size="large"
                placeholder="请输入密码"
                prefix={<LockOutlined />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" size="large" htmlType="submit">
                登陆
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
