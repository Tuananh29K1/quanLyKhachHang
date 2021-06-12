import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchDataUser, getUser } from "../../Store/Reducer/ReducerUser";
const ButtonSearchTop = () => {
  // ================== khai báo giá trị cần tìm ================
  const [valueInput, setValueInput] = useState("");
  // ========================= truyền giá trị cần tìm ===============
  const changeValue = (event) => {
    setValueInput(event.target.value);
  };

  // ================================ gửi thông tin cần search lên redux để tạo hành động =========

  const dispatch = useDispatch();
  const searchUser = (event) => {
    event.preventDefault();
    dispatch(searchDataUser(valueInput));
  };
  // ========================== reset lại các giá trị tìm kiếm ============================================
  useEffect(() => {
    dispatch(getUser());
  }, [valueInput]);
  // =============================== phần render =========================================================
  return (
    <form className="mainRight--top--search" onSubmit={searchUser}>
      <span className="searchDetail">
        <i className="fas fa-sort-down" />
      </span>
      <span>
        <input
          type="search"
          placeholder="Theo Tên, Mã, Điện Thoại"
          className="searchTop"
          value={valueInput}
          onChange={changeValue}
        />
      </span>
    </form>
  );
};

export default ButtonSearchTop;
