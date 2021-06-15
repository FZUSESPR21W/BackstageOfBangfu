import axios from "axios";

export const searchPost = async (tag, page, mock = false) => {
  if (mock === false) {
    return axios.get(`/back/show`, {
      params: {
        tag,
        page,
        msgType: 0,
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
    return axios.put(
      `/back/check`,
      {},
      {
        params: {
          id: postId,
          msgType: 1,
        },
      }
    );
  } else {
    return axios.put(`/app/mock/data/1989112?scope=response`);
  }
};

export const deletePost = async (postId, mock = false) => {
  if (mock === false) {
    return axios.delete(`/back/delete`, {
      params: {
        id: postId,
        msgType: 1,
      },
    });
  } else {
    return axios.delete("/app/mock/data/1989123?scope=response");
  }
};
