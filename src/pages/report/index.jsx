import React, { useEffect, useState } from "react";
import { ThemeHeading, ThemeTable } from "@/components";
import { columns } from "./constants";
import { setClsPrefixHOC } from "../../utils/setClsPrefixHoc";
import { pageClsPrefixs } from "../../constants";
import { Button, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { auditReport, searchReport, deleteReport } from "./modules/actions";
import delay from "delay";

import "./index.less";

const setClsPrefix = setClsPrefixHOC(pageClsPrefixs.Report);

const Report = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.getIn(["report", "posts"]).toJS());
  const total = useSelector((state) => state.getIn(["report", "totalNum"]));
  const [current, setCurrent] = useState(1);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const getReportData = async () => {
    setLoading(true);
    await dispatch(searchReport(value, current));
    await delay(1000);
    setLoading(false);
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await dispatch(searchReport("123", 1));
      setLoading(false);
    };
    getData();
  }, [dispatch]);

  // search
  const handleSearch = (value) => {
    setValue(value);
    setCurrent(1);
    getReportData();
  };

  // action
  const handleAudit = async (reportId) => {
    const res = await dispatch(auditReport(reportId));
    if (res === true) {
      getReportData();
    } else {
      message.warn("冻结失败");
    }
  };

  const handleDelete = async (reportId) => {
    const res = await dispatch(deleteReport(reportId));
    if (res === true) {
      getReportData();
    } else {
      message.warn("退回失败");
    }
  };

  const actionColumns = {
    title: "操作",
    dataIndex: "action",
    render: (_, record) => (
      <>
        <Button
          onClick={() => handleAudit(record.reportId)}
          type="primary"
          className={setClsPrefix("audit-btn")}
        >
          冻结
        </Button>
        <Button onClick={() => handleDelete(record.reportId)} type="primary">
          退回
        </Button>
      </>
    ),
  };

  // pagination
  const handleChange = (current) => {
    setCurrent(current);
    getReportData();
  };

  return (
    <div className={setClsPrefix("container")}>
      <ThemeHeading title="举报管理" />
      <ThemeTable
        columns={[...columns, actionColumns]}
        expandable={{
          expandedRowRender: (record) => (
            <div className={setClsPrefix("expand")}>
              <div className={setClsPrefix("expand-des")}>举报内容:</div>
              <div>{record.content}</div>
            </div>
          ),
          expandRowByClick: true,
          expandIconColumnIndex: -1,
        }}
        rowKey="reportId"
        data={data}
        total={total}
        current={current}
        onSearch={handleSearch}
        onChange={handleChange}
        loading={loading}
      />
    </div>
  );
};

export default Report;
