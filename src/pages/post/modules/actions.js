import {
  GET_POST_DETAIL,
  SEARCH_POST,
} from "./types.js";
import { PostServices } from '../../../services'
import axios from 'axios'

export const changeData = (data) => ({
  type: SEARCH_POST,
  payload: data,
});

export const searchPost = (tag, page) => {
  return async (disptach) => {
    try {
      const res = await PostServices.searchPost(tag, page, true);
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

export const changePostDetail = (data) => ({
  type: GET_POST_DETAIL,
  payload: data,
});

export const getPostDetail = (postId) => {
  return async (disptach) => {
    try {
      const res = await axios.get(`/api/back/posts/detail/${postId}`);
      const { error, data } = res.data;
      if (error !== 0) {
        return false;
      }
      disptach(changePostDetail(data));
      return true;
    } catch (ex) {
      console.error(ex.message);
      return false;
    }
  };
};

export const auditPost = (postId) => {
  return async () => {
    try {
      const res = await PostServices.auditPost(postId, true)
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

export const deletePost = (postId) => {
  return async () => {
    try {
      const res = await PostServices.deletePost(postId, true)
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
