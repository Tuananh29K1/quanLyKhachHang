import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { sortDataLoaiKH } from "../../../Store/Reducer/ReducerUser";
function SortLoaiKH() {
  const [showSort, setShowSort] = useState(true);
  // ================================ lấy dataLoaiKH ==============================
  const [dataLoaiKH, setDataLoaiKH] = useState("Tất Cả");
  // ================================== truyền data lên redux ========================
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sortDataLoaiKH(dataLoaiKH));
  }, [dataLoaiKH]);
  // ============================== show sort ==================================
  function changeShows() {
    setShowSort(!showSort);
  }
  function showSorts() {
    if (showSort === true) {
      return (
        <div className="mainLeft--sortLoaiKH--inputGroup flex-between mt-3">
          <ul className="pickDtae w-100">
            <li className="barRadio auto form--check">
              <label htmlFor="loaiKH-all">Tất Cả</label>
              <div className="barRadio--check">
                <label className="customRadio">
                  <input
                    type="radio"
                    name="sortLoaiKH"
                    id="loaiKH-all"
                    defaultChecked
                    value="Tất Cả"
                    onChange={() => setDataLoaiKH("Tất Cả")}
                  />
                  <span className="checkMark" />
                </label>
              </div>
            </li>
            <li className="barRadio auto form--check">
              <label htmlFor="loaiKH-caNhan">Cá Nhân</label>
              <div className="barRadio--check">
                <label className="customRadio">
                  <input
                    type="radio"
                    name="sortLoaiKH"
                    id="loaiKH-caNhan"
                    value="personal"
                    onChange={() => setDataLoaiKH("personal")}
                  />
                  <span className="checkMark" />
                </label>
              </div>
            </li>
            <li className="barRadio auto form--check">
              <label htmlFor="loaiKH-congTy">Công ty</label>
              <div className="barRadio--check">
                <label className="customRadio">
                  <input
                    type="radio"
                    name="sortLoaiKH"
                    id="loaiKH-congTy"
                    value="company"
                    onChange={() => setDataLoaiKH("company")}
                  />
                  <span className="checkMark" />
                </label>
              </div>
            </li>
          </ul>
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
  // =========================== phần Render ================================
  return (
    <article className="mainLeft--sortLoaiKH sort">
      <div className="mainLeft--sortLoaiKH--top flex-between mt-2">
        <h2>Loại Khách Hàng</h2>
        <span onClick={() => changeShows()}>{changeIcons()}</span>
      </div>
      {showSorts()}
    </article>
    // {/*End Loại Khách Hàng*/}
  );
}

export default SortLoaiKH;
