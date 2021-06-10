import {
  SEARCH_TASK,
} from "./types.js";
import { TaskServices } from '../../../services'

export const changeData = (data) => ({
  type: SEARCH_TASK,
  payload: data,
});

export const searchTask = (tag, page) => {
  return async (disptach) => {
    try {
      const res = await TaskServices.searchTask(tag, page, true);
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


export const auditTask = (taskId) => {
  return async () => {
    try {
      const res = await TaskServices.auditTask(taskId, true)
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

export const deleteTask = (taskId) => {
  return async () => {
    try {
      const res = await TaskServices.deleteTask(taskId, true)
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
