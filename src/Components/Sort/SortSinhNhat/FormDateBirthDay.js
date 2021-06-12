import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

function FormDateBirthDay(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const startUpdate = moment(startDate).format("YYYY-MM-DD").toString();
  const endUpdate = moment(endDate).format("YYYY-MM-DD").toString();

  // ==========================nút tìm kiếm ngày tháng================
  function callBack() {
    props.startDate(startUpdate);
    props.endDate(endUpdate);
  }

  function buttonTK() {
    callBack();
    props.show();
  }
  //  =============================== end nút tìm kiếm ngày tháng ================
  // ====================================================================
  return (
    <>
      <div>
        <div className="overlayBoxTime" onClick={() => buttonTK()}></div>
        <div className="containerTime">
          <div className="boxTime">
            <div>
              <div className="d-flex">
                <p className="mr-2">Từ Ngày:</p>
                <DatePicker
                  selected={startDate}
                  readOnly
                  className="readTime"
                ></DatePicker>
              </div>
              <div className="lineTime">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  // customInput={<InputTime />}
                  inline
                  fixedHeight
                />
              </div>
            </div>
            <div>
              <div className="d-flex">
                <p className="mr-2"> Từ Ngày:</p>
                <DatePicker
                  selected={endDate}
                  readOnly
                  className="readTime"
                ></DatePicker>
              </div>
              <div>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  // customInput={<InputTime />}
                  inline
                  fixedHeight
                  startDate={startDate}
                  minDate={startDate}
                />
              </div>
            </div>
          </div>
          <div className="buttonTime">
            <button onClick={() => buttonTK()}>
              <i className="fas fa-filter mr-2"></i>
              <span>Tìm Kiếm</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormDateBirthDay;
