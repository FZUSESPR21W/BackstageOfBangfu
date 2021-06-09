import Login from "../pages/Login/index";
import Post from "@/pages/post";

const RouterConfig = [
  {
    path: "/login",
    component: Login,
    auth: false,
  },
  {
    path: "/post",
    component: Post,
    auth: true,
  },
];

export default RouterConfig;
