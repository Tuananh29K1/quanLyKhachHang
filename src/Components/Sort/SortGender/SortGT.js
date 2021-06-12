import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { sortDataGenderUser } from "../../../Store/Reducer/ReducerUser";
function SortGT() {
  const [showSort, setShowSort] = useState(true);
  //   =================================== thay đổi giới tính ====================
  const [sortGender, setSortGender] = useState("Tất Cả");
  // ====================================== đẩy giữ liệu sort lên redux ===========
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sortDataGenderUser(sortGender));
  }, [sortGender]);
  //   ================================ show sort =============================
  function changeShows() {
    setShowSort(!showSort);
  }
  function showSorts() {
    if (showSort === true) {
      return (
        <div className="mainLeft--sortGT--inputGroup flex-between mt-3">
          <ul className="pickDtae w-100">
            <li className="barRadio auto form--check">
              <label htmlFor="gioiTinh-all">Tất Cả</label>
              <div className="barRadio--check">
                <label className="customRadio">
                  <input
                    type="radio"
                    name="sortGT"
                    id="gioiTinh-all"
                    defaultChecked
                    value="Tất Cả"
                    onChange={() => setSortGender("Tất Cả")}
                  />
                  <span className="checkMark" />
                </label>
              </div>
            </li>
            <li className="barRadio auto form--check">
              <label htmlFor="gioiTinh-men">Nam</label>
              <div className="barRadio--check">
                <label className="customRadio">
                  <input
                    type="radio"
                    name="sortGT"
                    id="gioiTinh-men"
                    value="men"
                    onChange={() => setSortGender("men")}
                  />
                  <span className="checkMark" />
                </label>
              </div>
            </li>
            <li className="barRadio auto form--check">
              <label htmlFor="gioiTinh-women">Nữ</label>
              <div className="barRadio--check">
                <label className="customRadio">
                  <input
                    type="radio"
                    name="sortGT"
                    id="gioiTinh-women"
                    value="women"
                    onChange={() => setSortGender("women")}
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
  // ========================== phần render ================================
  return (
    <article className="mainLeft--sortGT sort">
      <div className="mainLeft--sortGT--top flex-between">
        <h2>Giới Tính</h2>
        <span onClick={() => changeShows()}>{changeIcons()}</span>
      </div>
      {showSorts()}
    </article>
    // {/*End Giới Tính*/}
  );
}

export default SortGT;
