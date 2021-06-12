import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { sortDateBirthDay } from "../../../Store/Reducer/ReducerUser";
import "./formDateBirthDay.css";
import FormChangeTimeBirthDay from "./FormChangeTimeBirthDay";
import FormDateBirthDay from "./FormDateBirthDay";
function SortSinhNhat() {
  const [showSort, setShowSort] = useState(true);
  const [showTime, setShowTime] = useState(false);
  const [showStartDate, setShowStartDate] = useState("");
  const [showEndDate, setShowEndDate] = useState("");
  const [showTableTime, setShowTableTime] = useState(false);
  const [choiceTime, setChoiceTime] = useState("Toàn Thời Gian");
  const [valueTimeStart, setValueTimeStart] = useState(null);
  const [valueTimeEnd, setValueTimeEnd] = useState(null);
  //   ================================== lấy giữ liệu gửi lên redux ==============
  const dispatch = useDispatch();
  useEffect(() => {
    if (valueTimeStart !== null) {
      console.log(`start: ${valueTimeStart} end: ${valueTimeEnd}`);
      dispatch(sortDateBirthDay({ start: valueTimeStart, end: valueTimeEnd }));
    }
  }, [valueTimeStart]);
  //   =================================== phần showTableTim =================
  function changeTableTimes() {
    setShowTableTime(!showTableTime);
    setShowStartDate("");
  }

  function showTableTimes() {
    if (showTableTime === true) {
      return (
        <FormChangeTimeBirthDay
          close={() => changeTableTimes()}
          choice={choiceTimes}
          timeStart={valueStart}
          timeEnd={valueEnd}
        />
      );
    }
  }
  function valueStart(time) {
    setValueTimeStart(time);
  }
  function valueEnd(time) {
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
        <FormDateBirthDay
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
  // ================================ phần show sort =====================
  function changeShows() {
    setShowSort(!showSort);
  }
  function showSorts() {
    if (showSort === true) {
      const stylePosition = { position: "relative" };
      return (
        <div
          className="mainLeft--sortSinhNhat--inputGroup flex-between mt-3"
          style={stylePosition}
        >
          <ul className="pickDtae w-100">
            <li className="barRadio auto line">
              <div className="barRadio--input">
                <label className="customRadio">
                  <input
                    type="radio"
                    name="sortSinhNhat"
                    id="sinhNhat-ttg"
                    defaultChecked
                  />
                  <span className="checkMark" />
                </label>
              </div>
              <span className="flex-between">
                <label
                  htmlFor="sinhNhat-ttg"
                  onClick={() => changeTableTimes()}
                >
                  {showChoiceTimes()}
                </label>
                <label
                  htmlFor="sinhNhat-ttg"
                  onClick={() => changeTableTimes()}
                >
                  <i className="fas fa-sort" />
                </label>
              </span>
            </li>
            <li className="barRadio custom line">
              <div className="barRadio--input">
                <label className="customRadio">
                  <input type="radio" name="sortSinhNhat" id="sinhNhat-lck" />
                  <span className="checkMark" />
                </label>
              </div>
              <span className="flex-between">
                {showDates()}
                <label onClick={() => changeShowTimes()} htmlFor="sinhNhat-lck">
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
  // ========================== phần render ==============================
  return (
    <article className="mainLeft--sortSinhNhat sort">
      <div className="mainLeft--sortSinhNhat--top flex-between">
        <h2>Sinh Nhật</h2>
        <span onClick={() => changeShows()}>{changeIcons()}</span>
      </div>
      {showSorts()}
    </article>
    //       // {/*End Sinh Nhật*/}
  );
}

export default SortSinhNhat;
