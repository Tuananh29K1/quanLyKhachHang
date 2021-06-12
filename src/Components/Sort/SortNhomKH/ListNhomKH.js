import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemKHSelector } from "../../../Store/Reducer/ReducerItemDetail";
import { sortDataUser } from "../../../Store/Reducer/ReducerUser";

function ListNhomKH(props) {
  const itemKH = useSelector(itemKHSelector);
  const dispatch = useDispatch();

  // ====================== chọn nhóm khách hàng =======================
  function choiceNhom(itemTen, itemID) {
    props.choice(itemTen);
    props.close();
    // ====================== truyền dữ liệu cần search lên redux =================
    dispatch(sortDataUser(itemTen));
  }
  function choiceAllNhom() {
    props.choice("Tất cả các nhóm");
    props.close();
    // ====================== truyền dữ liệu cần search lên redux =================
    dispatch(sortDataUser("Tất cả các nhóm"));
  }
  // ====================== load danh sách nhóm khách hàng =======================
  function loadItemKH() {
    return itemKH.map((item) => (
      <div
        className="itemSelect mt-2"
        key={item.id}
        onClick={choiceNhom.bind(this, item.tenNhomKH, item.id)}
        value={item.tenNhomKH}
      >
        Nhóm {item.tenNhomKH}
      </div>
    ));
  }

  return (
    <>
      <div className="overlayList" onClick={() => props.close()}></div>
      <div className="groupSeachNhom">
        <div>
          <input
            type="search"
            className="searchNhomKH"
            placeholder="&#9998; Tìm Kiếm Nhóm"
          />
        </div>
        {loadItemKH()}
        <div className="itemSelect mt-2" onClick={() => choiceAllNhom()}>
          Tất cả các nhóm
        </div>
      </div>
    </>
  );
}

export default ListNhomKH;
