import Login from "../pages/Login/index";
import Post from "@/pages/post";
import Comment from "@/pages/comment";
import Task from "@/pages/task";

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
  {
    path: "/task",
    component: Task,
    auth: true,
  },
];

export default RouterConfig;
