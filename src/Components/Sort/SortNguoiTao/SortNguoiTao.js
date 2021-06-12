import React, { useState } from "react";
import { useSelector } from "react-redux";
import { adminsSelector } from "../../../Store/Reducer/ReducerAdmin";
function SortNguoiTao() {
  const [showSort, setShowSort] = useState(true);
  const listNguoiTao = useSelector(adminsSelector);
  const [choiceNguoiTao, setChoiceNguoiTao] = useState("");
  function changeNguoiTao(name) {
    setChoiceNguoiTao(name);
  }
  // ==================================================
  //   // ======================= Hiển Thị Sort ============
  function changeShows() {
    setShowSort(!showSort);
  }

  function showSorts() {
    if (showSort === true) {
      return (
        <div className="groupInputSelect">
          <div className="inputSelect">
            <input
              type="text"
              placeholder="Chọn Người Tạo"
              value={choiceNguoiTao}
              onChange={changeShows}
              readOnly
            />
            <div className="groupSelect">
              {listNguoiTao.map((admin) => (
                <div
                  className="itemSelect"
                  key={admin.id}
                  onClick={() => changeNguoiTao(admin.firstName)}
                >
                  {admin.firstName}
                </div>
              ))}
            </div>
          </div>
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
  // =========================== phần render =============================
  return (
    <article className="mainLeft--sortNguoiTao sort">
      <div className="mainLeft--sortNguoiTao--top flex-between">
        <h2>Người Tạo</h2>
        <span onClick={() => changeShows()}>{changeIcons()}</span>
      </div>
      {showSorts()}
    </article>
    // {/*End Nguoi Tao*/}
  );
}

export default SortNguoiTao;
