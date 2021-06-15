import axios from "axios";

export const searchReport = async (tag, page, mock = false) => {
  if (mock === false) {
    return axios.get(`/back/show`, {
      params: {
        tag,
        page,
        msgType: 3,
      },
    });
  } else {
    return axios.get(`/app/mock/data/1991486?scope=response`, {
      params: {
        tag,
        page,
        msgType: 3,
      },
    });
  }
};

export const auditReport = async (reportId, mock = false) => {
  if (mock === false) {
    return axios.put(`/back/check`, {
      params: {
        id: reportId,
        msgType: 4,
      },
    });
  } else {
    return axios.put(`/app/mock/data/1991485?scope=response`, {
      params: {
        id: reportId,
        msgType: 4,
      },
    });
  }
};

export const deleteReport = async (reportId, mock = false) => {
  if (mock === false) {
    return axios.delete(`/back/delete`, {
      params: {
        id: reportId,
        msgType: 4,
      },
    });
  } else {
    return axios.delete("/app/mock/data/1991487?scope=response", {
      params: {
        id: reportId,
        msgType: 4,
      },
    });
  }
};
