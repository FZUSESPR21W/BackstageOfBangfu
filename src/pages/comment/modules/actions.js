import {
  SEARCH_COMMENT,
} from "./types.js";
import { CommentServices } from '../../../services'

export const changeData = (data) => ({
  type: SEARCH_COMMENT,
  payload: data,
});

export const searchComment = (tag, page) => {
  return async (disptach) => {
    try {
      const res = await CommentServices.searchComment(tag, page, true);
      const { error, data } = res.data;
      if (error !== 0) {
        return false;
      }
      disptach(changeData(data));
      return true;
    } catch (ex) {
      console.error(ex.message);
      return false;
    }
  };
};


export const auditComment = (commentId) => {
  return async () => {
    try {
      const res = await CommentServices.auditComment(commentId, true)
      const { error } = res.data;
      if (error !== 0) {
        return false;
      }
      return true;
    } catch (ex) {
      console.error(ex.message);
      return false;
    }
  };
};

export const deleteComment = (commentId) => {
  return async () => {
    try {
      const res = await CommentServices.deleteComment(commentId, true)
      const { error } = res.data;
      if (error !== 0) {
        return false;
      }
      return true;
    } catch (ex) {
      console.error(ex.message);
      return false;
    }
  };
};
