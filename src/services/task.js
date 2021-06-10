import axios from "axios";

export const searchTask = async (tag, page, mock = false) => {
  if (mock === false) {
    return axios.get(`/api/back/show`, {
      params: {
        tag,
        page,
        msgType: 3,
      },
    });
  } else {
    return axios.get(`/app/mock/data/1991336?scope=response`, {
      params: {
        tag,
        page,
        msgType: 3,
      },
    });
  }
};

export const auditTask = async (taskId, mock = false) => {
  if (mock === false) {
    return axios.put(`/api/back/check`, {
      params: {
        id: taskId,
        msgType: 3,
      },
    });
  } else {
    return axios.put(`/app/mock/data/1991338?scope=response`, {
      params: {
        id: taskId,
        msgType: 3,
      },
    });
  }
};

export const deleteTask = async (taskId, mock = false) => {
  if (mock === false) {
    return axios.delete(`/api/back/delete`, {
      params: {
        id: taskId,
        msgType: 3,
      },
    });
  } else {
    return axios.delete("/app/mock/data/1991339?scope=response", {
      params: {
        id: taskId,
        msgType: 3,
      },
    });
  }
};
