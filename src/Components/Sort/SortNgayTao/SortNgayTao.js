import React, { useState, useEffect } from "react";

import FormChangeTime from "./FormChangeTime";
import FormDate from "./FormDate";
import "./FormDate.css";

import { useDispatch } from "react-redux";
import { sortDateUser } from "../../../Store/Reducer/ReducerUser";

function SortNgayTao() {
  const [showSort, setShowSort] = useState(true);
  const [showTime, setShowTime] = useState(false);
  const [showStartDate, setShowStartDate] = useState("");
  const [showEndDate, setShowEndDate] = useState("");
  const [showTableTime, setShowTableTime] = useState(false);
  const [choiceTime, setChoiceTime] = useState("Toàn Thời Gian");
  const [valueTimeStart, setValueTimeStart] = useState(null);
  const [valueTimeEnd, setValueTimeEnd] = useState(null);
  // ===================================== truyền dữ liệu lên redux ============
  const dispatch = useDispatch();
  useEffect(() => {
    if (valueTimeStart !== null) {
      dispatch(sortDateUser({ start: valueTimeStart, end: valueTimeEnd }));
    }
  }, [valueTimeStart]);
  // ============================ show table time =================
  function changeTableTimes() {
    setShowTableTime(!showTableTime);
    setShowStartDate("");
  }

  function showTableTimes() {
    if (showTableTime === true) {
      return (
        <FormChangeTime
          close={() => changeTableTimes()}
          choice={choiceTimes}
          timeStart={getTimeStart}
          timeEnd={getTimeEnd}
        />
      );
    }
  }
  function getTimeStart(time) {
    setValueTimeStart(time);
  }
  function getTimeEnd(time) {
    setValueTimeEnd(time);
  }
  function choiceTimes(time) {
    setChoiceTime(time);
  }
  function showChoiceTimes() {
    if (choiceTime === "Toàn Thời Gian") {
      return "Toàn Thời Gian";
    } else {
      return choiceTime;
    }
  }
  // ============================= show Date ===================
  function showStartDates(date) {
    setShowStartDate(date);
  }
  function showEndDates(date) {
    setShowEndDate(date);
  }
  function showDates() {
    if (showStartDate === "") {
      return (
        <label htmlFor="ngayTao-lck" onClick={() => changeShowTimes()}>
          Lựa Chọn Khác
        </label>
      );
    } else {
      return (
        <>
          <label
            htmlFor="ngayTao-lck"
            className="d-flex justify-content-between w-75"
            onClick={() => changeShowTimes()}
          >
            <p className="font-13">{showStartDate}</p>
            <p className="font-13 mx-1">-</p>
            <p className="font-13">{showEndDate}</p>
          </label>
        </>
      );
    }
  }
  // ========================= show Time ====================
  //   // ===========================================================
  function changeShowTimes() {
    setShowTableTime(false);
    setShowTime(!showTime);
    setChoiceTime("Toàn Thời Gian");
  }

  function showTimes() {
    if (showTime === true) {
      // ======================== làm cho body không scroll nữa ========
      document.body.classList.add("active-modal");
      // =========================== xuất hiện modal ======================
      return (
        <FormDate
          show={() => changeShowTimes()}
          startDate={showStartDates}
          endDate={showEndDates}
        />
      );
    } else {
      // ======================== làm cho body không scroll nữa ========
      document.body.classList.remove("active-modal");
    }
  }
  //   // ====================== Show Sort ====================
  //   // ========================================================
  function changeShows() {
    setShowSort(!showSort);
  }
  function showSorts() {
    if (showSort === true) {
      const stylePosition = { position: "relative" };
      return (
        <div
          className="mainLeft--sortNgayTao--inputGroup flex-between mt-3"
          style={stylePosition}
        >
          <ul className="pickDtae w-100">
            <li className="barRadio auto line">
              <div className="barRadio--input">
                <label className="customRadio">
                  <input
                    type="radio"
                    name="sortNgayTao"
                    id="ngayTao-ttg"
                    defaultChecked
                  />
                  <span className="checkMark" />
                </label>
              </div>
              <span className="flex-between">
                <label htmlFor="ngayTao-ttg" onClick={() => changeTableTimes()}>
                  {showChoiceTimes()}
                </label>
                <label htmlFor="ngayTao-ttg" onClick={() => changeTableTimes()}>
                  <i className="fas fa-sort" />
                </label>
              </span>
            </li>
            <li className="barRadio custom line">
              <div className="barRadio--input">
                <label className="customRadio">
                  <input type="radio" name="sortNgayTao" id="ngayTao-lck" />
                  <span className="checkMark" />
                </label>
              </div>
              <span className="flex-between">
                {showDates()}
                <label onClick={() => changeShowTimes()} htmlFor="ngayTao-lck">
                  <i className="far fa-calendar-alt" />
                </label>
              </span>
            </li>
          </ul>
          {showTimes()}
          {showTableTimes()}
        </div>
      );
    }
  }
  function changeIcons() {
    if (showSort === true) {
      return <i className="fas fa-angle-up" />;
    } else {
      return <i className="fas fa-angle-down" />;
    }
  }
  //   // ====================================== End Show Sort ====================================
  // ========================= phần render ===========================
  return (
    <article className="mainLeft--sortNgayTao sort">
      <div className="mainLeft--sortNgayTao--top flex-between">
        <h2>Ngày Tạo</h2>
        <span onClick={() => changeShows()}>{changeIcons()}</span>
      </div>
      {showSorts()}
    </article>
  );
  // {/*End Ngay Tao*/};
}

export default SortNgayTao;
