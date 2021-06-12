import React, { useState } from "react";
import { addItemKH } from "../../../Store/Reducer/ReducerItemDetail";
import { useDispatch } from "react-redux";

function FormSortNhomKH(props) {
  const [show, setShow] = useState(true);
  // ====================== lấy tên nhóm ========================
  const [tenNhomKH, setTenNhomKH] = useState("");
  const [discount, setDiscount] = useState("");
  const [note, setNote] = useState("");

  const changeTenNhomKH = (event) => {
    setTenNhomKH(event.target.value);
  };
  const changeDiscount = (event) => {
    setDiscount(event.target.value);
  };
  const changeNote = (event) => {
    setNote(event.target.value);
  };

  // =========================== dispatch ========================
  const dispatch = useDispatch();
  const addItemNhomKh = (event) => {
    event.preventDefault();
    props.close();
    dispatch(addItemKH(tenNhomKH, discount, note));
  };
  // ================================= show form thêm nhóm KH ==================
  function showTable() {
    if (show === true) {
      return (
        <form className="navContent--thongTin" onSubmit={addItemNhomKh}>
          <div className="groupInput--popUpNhomKh">
            <label htmlFor="tenNhom" className="groupInput">
              Tên Nhóm:
            </label>
            <div className="input--popUpNhomKH">
              <input
                type="text"
                id="tenNhom"
                className="inputNKH"
                value={tenNhomKH}
                onChange={changeTenNhomKH}
              />
            </div>
          </div>
          {/* end tên nhóm  */}
          <div className="groupInput--popUpNhomKh">
            <label htmlFor="giamGia">Giảm Giá:</label>
            <div className="input--popUpNhomKH groupSale">
              <div className="inputNKH-sale">
                <input
                  type="text"
                  id="giamGia"
                  value={discount}
                  onChange={changeDiscount}
                />
              </div>
              <div className="groupButtonNKH">
                <button>%</button>
                <button>VND</button>
              </div>
            </div>
          </div>
          {/* end giảm gía */}
          <div className="groupInput--popUpNhomKh">
            <label htmlFor="ghiChu">Ghi Chú:</label>
            <div className="input--popUpNhomKH">
              <input
                type="text"
                id="ghiChu"
                className="inputNKH"
                value={note}
                onChange={changeNote}
              />
            </div>
          </div>
          {/* end ghi chú  */}
          <div className="buttonNKH--thongTin">
            <button type="submit">Lưu</button>
            <button onClick={() => props.close()}>Huỷ</button>
          </div>
        </form>
        // {/* end Thong Tin  */}
      );
    } else {
      return (
        <form className="navContent--nangCao">
          <div className="groupThietLap">
            <p className="mb-4">
              Thiết Lập Điều Kiện Thêm Khách Hàng Vào Nhóm:
            </p>
            <span>
              <button>Thêm Điều Kiện</button>
            </span>
          </div>
          <div>
            <div className="groupRadioNKH mb-3">
              <label className="customRadio mr-4">
                <input
                  type="radio"
                  name="thietLapNangCao"
                  id="num1"
                  defaultChecked
                />
                <span className="checkMark" />
              </label>
              <label htmlFor="num1">
                Thêm khách hàng vào nhóm theo điều kiện.
              </label>
            </div>
            <div className="groupRadioNKH mb-3">
              <label className="customRadio mr-4">
                <input type="radio" name="thietLapNangCao" id="num2" />
                <span className="checkMark" />
              </label>
              <label htmlFor="num2">
                Cập nhật lại danh sách theo điều kiện.
              </label>
            </div>
            <div className="groupRadioNKH mb-3">
              <label className="customRadio mr-4">
                <input type="radio" name="thietLapNangCao" id="num3" />
                <span className="checkMark" />
              </label>
              <label htmlFor="num3">Không cập nhật danh sách khách hàng.</label>
            </div>
          </div>
          <hr />
          <div className="groupCheckNKH">
            <label className="customCheck mr-4">
              <input type="checkbox" id="num4" />
              <span className="checkMark--check" />
            </label>
            <label htmlFor="num4">Hệ thống thực hiện tự động</label>
          </div>
          <div className="groupButton--nangCao">
            <button>Lưu</button>
            <button onClick={() => props.close()}>Huỷ</button>
          </div>
        </form>
        // {/* end thiet lap nâng cao  */}
      );
    }
  }
  // ==================================== end show form thêm mới nhóm khách hàng ==========
  return (
    <>
      <div className="overlayPopUP--nhomKh" onClick={() => props.close()}></div>
      <div className="popUp--nhomKH">
        <div className="title--popUpNhomKH">
          <h2>Thêm Nhóm Khách Hàng</h2>
          <div>
            <i className="fas fa-times" onClick={() => props.close()}></i>
          </div>
        </div>
        {/* end title */}
        <div className="navTab--popUp">
          <ul>
            <li
              onClick={() => setShow(true)}
              className={show === true ? "activeNKH" : "nonActiveNKH"}
            >
              Thông Tin
            </li>
            <li
              onClick={() => setShow(false)}
              className={show === false ? "activeNKH" : "nonActiveNKH"}
            >
              Thiết Lập Nâng Cao
            </li>
          </ul>
        </div>
        <div className="navContent--popUp">{showTable()}</div>
      </div>
    </>
  );
}

export default FormSortNhomKH;
