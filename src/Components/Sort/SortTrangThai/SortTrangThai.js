import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { sortDataStatus } from "../../../Store/Reducer/ReducerUser";
function SortTrangThai() {
  const [showSort, setShowSort] = useState(true);
  //   ======================================= lấy data trạng thái ===============
  const [dataStatus, setDataStatus] = useState("Tất Cả");
  //  ================================== truyền dữ liệu lên redux =====================
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sortDataStatus(dataStatus));
  }, [dataStatus]);
  // ==================================== phần show sort ====================
  function changeShows() {
    setShowSort(!showSort);
  }
  function showSorts() {
    if (showSort === true) {
      return (
        <div className="mainLeft--sortTrangThai--inputGroup flex-between mt-3">
          <ul className="pickDtae w-100">
            <li className="barRadio auto form--check">
              <label htmlFor="trangThai-all">Tất Cả</label>
              <div className="barRadio--check">
                <label className="customRadio">
                  <input
                    type="radio"
                    name="sortTrangThai"
                    id="trangThai-all"
                    defaultChecked
                    value="Tất Cả"
                    onChange={() => setDataStatus("Tất Cả")}
                  />
                  <span className="checkMark" />
                </label>
              </div>
            </li>
            <li className="barRadio auto form--check">
              <label htmlFor="trangThai-active">Đang Hoạt Động</label>
              <div className="barRadio--check">
                <label className="customRadio">
                  <input
                    type="radio"
                    name="sortTrangThai"
                    id="trangThai-active"
                    value="Đang Hoạt Động"
                    onChange={() => setDataStatus("Đang Hoạt Động")}
                  />
                  <span className="checkMark" />
                </label>
              </div>
            </li>
            <li className="barRadio auto form--check">
              <label htmlFor="trangThai-cancel">Ngừng Hoạt Động</label>
              <div className="barRadio--check">
                <label className="customRadio">
                  <input
                    type="radio"
                    name="sortTrangThai"
                    id="trangThai-cancel"
                    value="Ngừng Hoạt Động"
                    onChange={() => setDataStatus("Ngừng Hoạt Động")}
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
  // ======================================= phần render =======================
  return (
    <article className="mainLeft--sortTrangThai sort">
      <div className="mainLeft--sortTrangThai-top flex-between">
        <h2>Trạng Thái</h2>
        <span onClick={() => changeShows()}>{changeIcons()}</span>
      </div>
      {showSorts()}
    </article>
    // {/*End Trạng Thái*/}
  );
}

export default SortTrangThai;
