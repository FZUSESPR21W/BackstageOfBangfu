import axios from "axios";

export const searchPost = async (tag, page, mock = false) => {
  if (mock === false) {
    return axios.get(`/api/back/posts/show`, {
      params: {
        tag,
        page,
      },
    });
  } else {
    return axios.get(`/app/mock/data/1989101?scope=response`, {
      params: {
        tag,
        page,
      },
    });
  }
};

export const auditPost = async (postId, mock = false) => {
  if (mock === false) {
    return axios.put(`/api/back/posts/check/${postId}`);
  } else {
    return axios.put(`/app/mock/data/1989112?scope=response`);
  }
};

export const deletePost = async (postId, mock = false) => {
  if (mock === false) {
    return axios.delete(`/api/back/posts/delete/${postId}`);
  } else {
    return axios.delete("/app/mock/data/1989123?scope=response");
  }
};
