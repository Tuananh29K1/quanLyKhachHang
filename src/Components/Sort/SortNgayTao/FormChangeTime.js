import React from "react";
import moment from "moment";
import "moment-lunar";
import "./formTableTime.css";

function FormChangeTime(props) {
  // ============================ filter Time ===================================

  function filterToday() {
    const today = moment().subtract(0, "days").format("YYYY-MM-DD").toString();
    const timeStart = Number(moment().subtract(0, "days").set({'hour': 0, 'minute': 0, 'second': 0, 'millisecond':0}))
    const timeEnd = Number(moment().subtract(0, "days").set("millisecond",0))
    return props.choice("Hôm Nay"),props.timeStart(timeStart), props.close(), props.timeEnd(timeEnd);
  }
  function filterYesterday() {
    const a = moment().subtract(1, "days").format("YYYY-MM-DD").toString();
    return props.choice("Hôm Qua");
  }
  function filterThisWeek() {
    const dayStart = moment()
      .subtract(0, "weeks")
      .startOf("isoWeek")
      .format("YYYY-MM-DD")
      .toString();
    const dayEnd = moment()
      .subtract(0, "weeks")
      .endOf("isoWeek")
      .format("YYYY-MM-DD")
      .toString();
    console.log(`từ: ${dayStart} đến: ${dayEnd}`);
    return props.choice("Tuần Này");
  }
  function filterLastWeek() {
    const dayStart = moment()
      .subtract(1, "weeks")
      .startOf("isoWeek")
      .format("YYYY-MM-DD")
      .toString();
    const dayEnd = moment()
      .subtract(1, "weeks")
      .endOf("isoWeek")
      .format("YYYY-MM-DD")
      .toString();
    console.log(`từ: ${dayStart} đến: ${dayEnd}`);
    return props.choice("Tuần Trước");
  }
  function filterLast7day() {
    const dayStart = moment()
      .subtract(0, "days")
      .format("YYYY-MM-DD")
      .toString();
    const dayEnd = moment().subtract(6, "days").format("YYYY-MM-DD").toString();
    console.log(`từ: ${dayEnd} đến: ${dayStart}`);
    return props.choice("7 Ngày Qua");
  }
  function filterThisMonth() {
    const dayStart = moment().startOf("month").format("YYYY-MM-DD").toString();
    const dayEnd = moment().endOf("month").format("YYYY-MM-DD").toString();
    console.log(`từ: ${dayStart} đến: ${dayEnd}`);
    return props.choice("Tháng Này");
  }

  function filterLastMonth() {
    const dayStart = moment()
      .subtract(1, "M")
      .startOf("month")
      .format("YYYY-MM-DD")
      .toString();
    const dayEnd = moment()
      .subtract(1, "M")
      .endOf("month")
      .format("YYYY-MM-DD")
      .toString();
    console.log(`từ: ${dayStart} đến: ${dayEnd}`);
    return props.choice("Tháng Trước");
  }
  function filterThisMonthVN() {
    const dayStart = moment()
      .subtract(0, "M")
      .startOf("month")
      .lunar()
      .format("YYYY-MM-DD")
      .toString();
    const dayEnd = moment()
      .subtract(0, "M")
      .endOf("month")
      .lunar()
      .format("YYYY-MM-DD")
      .toString();
    console.log(`từ: ${dayStart} đến: ${dayEnd}`);
    return props.choice("Tháng Này Âm Lịch");
  }
  function filterLastMonthVN() {
    const dayStart = moment()
      .subtract(1, "M")
      .startOf("month")
      .lunar()
      .format("YYYY-MM-DD")
      .toString();
    const dayEnd = moment()
      .subtract(1, "M")
      .endOf("month")
      .lunar()
      .format("YYYY-MM-DD")
      .toString();
    console.log(`từ: ${dayStart} đến: ${dayEnd}`);
    return props.choice("Tháng Trước Âm Lịch");
  }
  function filterLast30days() {
    const dayStart = moment()
      .subtract(0, "days")
      .startOf("day")
      .format("YYYY-MM-DD")
      .toString();
    const dayEnd = moment()
      .subtract(30, "days")
      .endOf("day")
      .format("YYYY-MM-DD")
      .toString();
    console.log(`từ: ${dayStart} đến: ${dayEnd}`);
    return props.choice("30 Ngày Qua");
  }
  function filterThisQuater() {
    const dayStart = moment()
      .subtract(0, "Q")
      .startOf("quarter")
      .format("YYYY-MM-DD")
      .toString();
    const dayEnd = moment()
      .subtract(0, "Q")
      .endOf("quarter")
      .format("YYYY-MM-DD")
      .toString();
    console.log(`từ: ${dayStart} đến: ${dayEnd}`);
    return props.choice("Quý Này");
  }
  function filterLastQuater() {
    const dayStart = moment()
      .subtract(1, "Q")
      .startOf("quarter")
      .format("YYYY-MM-DD")
      .toString();
    const dayEnd = moment()
      .subtract(1, "Q")
      .endOf("quarter")
      .format("YYYY-MM-DD")
      .toString();
    console.log(`từ: ${dayStart} đến: ${dayEnd}`);
    return props.choice("Quý Trước");
  }
  function filterThisYear() {
    const dayStart = moment()
      .subtract(0, "Y")
      .startOf("year")
      .format("YYYY")
      .toString();
    console.log(dayStart);
    return props.choice("Năm Nay");
  }
  function filterLastYear() {
    const dayStart = moment()
      .subtract(1, "Y")
      .startOf("year")
      .format("YYYY")
      .toString();
    console.log(dayStart);
    return props.choice("Năm Trước");
  }
  function filterThisYearVN() {
    const dayStart = moment()
      .subtract(-1, "Y")
      .startOf("year")
      .lunar()
      .format("YYYY")
      .toString();
    console.log(`năm: ${dayStart}`);
    return props.choice("Năm Nay Âm Lịch");
  }
  function filterLastYearVN() {
    const dayStart = moment()
      .subtract(0, "Y")
      .startOf("year")
      .lunar()
      .format("YYYY")
      .toString();
    console.log(`năm: ${dayStart}`);
    return props.choice("Năm Trước Âm Lịch");
  }
  function filterFromNow() {
    const dayStart = moment()
      .subtract(0, "Y")
      .startOf("year")
      .format("DD-MM-YYYY")
      .toString();
    const dayEnd = moment().subtract(0, "days").format("YYYY-MM-DD").toString();
    console.log(`Từ: ${dayStart} Đến:${dayEnd}`);
    return props.choice("Toàn Thời Gian");
  }
  // ================================= end filter Time ===============================
  return (
    <>
      <div className="overlayTableTime" onClick={() => props.close()}></div>
      <div className="tableTime row">
        <div className="col-2">
          <h4>Theo Ngày</h4>
          <ul>
            <li>
              <a href="#" onClick={() => filterToday()}>
                Hôm Nay
              </a>
            </li>
            <li>
              <a href="#" onClick={() => filterYesterday()}>
                Hôm Qua
              </a>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <h4>Theo Tuần</h4>
          <ul>
            <li>
              <a href="#" onClick={() => filterThisWeek()}>
                Tuần Này
              </a>
            </li>
            <li>
              <a href="#" onClick={() => filterLastWeek()}>
                Tuần Trước
              </a>
            </li>
            <li>
              <a href="#" onClick={() => filterLast7day()}>
                7 Ngày Qua
              </a>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h4>Theo Tháng</h4>
          <ul>
            <li>
              <a href="#" onClick={() => filterThisMonth()}>
                Tháng Này
              </a>
            </li>
            <li>
              <a href="#" onClick={() => filterLastMonth()}>
                Tháng Trước
              </a>
            </li>
            <li>
              <a href="#" onClick={() => filterThisMonthVN()}>
                Tháng Này (Âm Lịch)
              </a>
            </li>
            <li>
              <a href="#" onClick={() => filterLastMonthVN()}>
                Tháng Trước (Âm Lịch)
              </a>
            </li>
            <li>
              <a href="#" onClick={() => filterLast30days()}>
                30 Ngày Qua
              </a>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <h4>Theo Quý</h4>
          <ul>
            <li>
              <a href="#" onClick={() => filterThisQuater()}>
                Quý Này
              </a>
            </li>
            <li>
              <a href="#" onClick={() => filterLastQuater()}>
                Quý Trước
              </a>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h4>Theo Năm</h4>
          <ul>
            <li>
              <a href="#" onClick={() => filterThisYear()}>
                Năm Nay
              </a>
            </li>
            <li>
              <a href="#" onClick={() => filterLastYear()}>
                Năm Trước
              </a>
            </li>
            <li>
              <a href="#" onClick={() => filterThisYearVN()}>
                Năm Này (Âm Lịch)
              </a>
            </li>
            <li>
              <a href="#" onClick={() => filterLastYearVN()}>
                Năm Trước (Âm Lịch)
              </a>
            </li>
            <li>
              <a href="#" onClick={() => filterFromNow()}>
                Toàn Thời Gian
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default FormChangeTime;
