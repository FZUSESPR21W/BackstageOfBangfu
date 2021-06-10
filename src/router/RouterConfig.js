import Login from "../pages/Login/index";
import Post from "@/pages/post";
import Comment from "@/pages/comment";

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
  {
    path: "/comment",
    component: Comment,
    auth: true,
  },
];

export default RouterConfig;
