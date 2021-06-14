import {
  SEARCH_REPORT,
} from "./types.js";
import { ReportServices } from '../../../services'

export const changeData = (data) => ({
  type: SEARCH_REPORT,
  payload: data,
});

export const searchReport = (tag, page) => {
  return async (disptach) => {
    try {
      const res = await ReportServices.searchReport(tag, page, true);
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


export const auditReport = (reportId) => {
  return async () => {
    try {
      const res = await ReportServices.auditReport(reportId, true)
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

export const deleteReport = (reportId) => {
  return async () => {
    try {
      const res = await ReportServices.deleteReport(reportId, true)
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
