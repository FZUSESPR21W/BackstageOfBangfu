import axios from "axios";

export const searchComment = async (tag, page, mock = false) => {
  if (mock === false) {
    return axios.get(`/api/back/show`, {
      params: {
        tag,
        page,
        msgType: 1,
      },
    });
  } else {
    return axios.get(`/app/mock/data/1990997?scope=response`, {
      params: {
        tag,
        page,
        msgType: 1,
      },
    });
  }
};

export const auditComment = async (commentId, mock = false) => {
  if (mock === false) {
    return axios.put(`/api/back/check`, {
      params: {
        id: commentId,
        msgType: 1,
      },
    });
  } else {
    return axios.put(`/app/mock/data/1991001?scope=response`, {
      params: {
        id: commentId,
        msgType: 1,
      },
    });
  }
};

export const deleteComment = async (commentId, mock = false) => {
  if (mock === false) {
    return axios.delete(`/api/back/delete`, {
      params: {
        id: commentId,
        msgType: 1,
      },
    });
  } else {
    return axios.delete("/app/mock/data/1991004?scope=response", {
      params: {
        id: commentId,
        msgType: 1,
      },
    });
  }
};
