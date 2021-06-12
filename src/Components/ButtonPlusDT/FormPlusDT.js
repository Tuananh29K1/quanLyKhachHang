import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Store/Reducer/ReducerUser";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { nanoid } from "nanoid";
import { itemKHSelector } from "../../Store/Reducer/ReducerItemDetail";

// ==================================== component ====================
function FormPlusDT(props) {
  const dispatch = useDispatch();
  const itemKH = useSelector(itemKHSelector);
  // ================== khai báo giá trị mới =======================
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [typeofUser, setTypeOfUser] = useState("personal");
  const [newNameCompany, setNewNameCompany] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newZipCode, setNewZipCode] = useState("");
  const [newStreet, setNewStreet] = useState("");
  const [newGener, setNewGender] = useState("men");
  const [newMaSoThue, setNewMaSoThue] = useState("");
  const [newFaceBook, setNewFaceBook] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newNhomKH, setNewNhomKH] = useState("");
  const [newNote, setNewNote] = useState("");


  // =============================== thay đổi birth ======================
  const [showTableBirth, setShowTableBirth] = useState(false);
  const [birthDay, setBirthDay] = useState("");
  const dateBorn = () => {
    if (birthDay != "") {
      return moment(birthDay).format("YYYY-MM-DD").toString();
    } else {
      return "";
    }
  };
  // ======================== lấy gía trị mới =========================
  function getNewName(event) {
    setNewName(event.target.value);
  }
  function getNewPhone(event) {
    setNewPhone(event.target.value);
  }
  function getNewNameCompany(event) {
    setNewNameCompany(event.target.value);
  }
  function getNewZipCode(event) {
    setNewZipCode(event.target.value);
  }
  function getNewCity(event) {
    setNewCity(event.target.value);
  }
  function getNewStreet(event) {
    setNewStreet(event.target.value);
  }
  function getNewMaSoThue(event) {
    setNewMaSoThue(event.target.value);
  }
  function getNewFaceBook(event) {
    setNewFaceBook(event.target.value);
  }
  function getNewEmail(event) {
    setNewEmail(event.target.value);
  }
  function getNewNote(event) {
    setNewNote(event.target.value);
  }
  // ========================================== show birthday =====================
  function changeBirthDay() {
    if (showTableBirth === true) {
      return (
        <>
          <div
            className="overlayList"
            onClick={() => setShowTableBirth(!showTableBirth)}
          ></div>
          <div className="tableBirthday">
            <DatePicker
              selected={birthDay}
              onChange={(date) => setBirthDay(date)}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              inline
            />
            <button onClick={() => setShowTableBirth(!showTableBirth)}>
              Chọn
            </button>
          </div>
        </>
      );
    }
  }
  // ================================= xử lý thêm nhomKH =======================
  const [showListKH, setShowListKH] = useState(false);

  function getNewNhomKH() {
    setShowListKH(!showListKH);
  }

  function loadItemKH() {
    if (showListKH === true) {
      const listKH = itemKH.map((item) => (
        <div
          className="itemSelect mt-2 listItemKH--item"
          key={item.id}
          onClick={() => setNewNhomKH(item.tenNhomKH)}
        >
          <span>Nhóm {item.tenNhomKH}</span>
        </div>
      ));
      return listKH;
    }
  }
  // ============================== type of company =========================
  function nameCompany() {
    if (typeofUser === "company") {
      return (
        <div>
          <div className="inputLabel">
            <label>Tên Công Ty:</label>
          </div>
          <div className="input--text">
            <input
              type="text"
              value={newNameCompany}
              onChange={getNewNameCompany}
            />
          </div>
        </div>
      );
    }
  }
  // =================== đóng gói dữ liệu và gửi đi backEnd ==================================
  const sendNewUser = async () => {
    const newUserClient = {
      id: nanoid(),
      name: newName,
      phone: newPhone,
      gender: newGener,
      birthDay: dateBorn(),
      loaiKH: typeofUser,
      maSoThue: newMaSoThue,
      email: newEmail,
      facebook: newFaceBook,
      nhomKH: newNhomKH,
      note: newNote,
      company: {
        name: newNameCompany,
      },
      address: {
        city: newCity,
        zipcode: newZipCode,
        street: newStreet,
      },
      trangThai: "Đang Hoạt Động",
      dateBornUser: props.getDate,
    };
    await dispatch(addUser(newUserClient));
    props.show();
  };
  // ==================================== phần render ==========================
  return (
    <>
      <div className="overlay" onClick={() => props.show()}></div>
      <article className="formDKKH">
        <span className="formDKKH--caption px-3">
          <p>
            Thêm Khách Hàng
            <span className="ml-2 pl-2">
              Chi nhánh tạo: Chi nhánh trung tâm
            </span>
          </p>
          <aside>
            <i className="fas fa-times" onClick={() => props.show()} />
          </aside>
        </span>
        {/*End Caption*/}
        <div className="formDKKH--content row">
          <div className="formDKKH--avatar col-2">
            <div className="avatar">
              <img src="https://via.placeholder.com/150" alt="anhDaiDien" />
            </div>
            <span>
              <label htmlFor="file" className="labelInputFile">
                Chọn Ảnh
              </label>
              <input type="file" id="file" className="inputFile" name="file" />
            </span>
          </div>
          {/*End Avatar*/}
          <div className="formDKKH--infoRight col-5">
            <ul>
              <li className="inputValue mb-3">
                <div className="inputLabel">
                  <label>Mã khách hàng:</label>
                </div>
                <div className="input--text">
                  <input type="text" placeholder="Mã Mặc Định" disabled />
                </div>
              </li>
              {/*Mã khách hàng*/}
              <li className="inputValue mb-3">
                <div className="inputLabel">
                  <label>Tên khách hàng:</label>
                </div>
                <div className="input--text">
                  <input type="text" value={newName} onChange={getNewName} />
                </div>
              </li>
              {/*Tên khách hàng*/}
              <li className="inputValue mb-3">
                <div className="inputLabel">
                  <label>Điện Thoại:</label>
                </div>
                <div className="input--text mb-3">
                  <input type="text" value={newPhone} onChange={getNewPhone} />
                </div>
              </li>
              {/*Điện Thoại*/}
              <li className="inputValue mb-3">
                {changeBirthDay()}
                <div className="inputLabel">
                  <label>Ngày Sinh:</label>
                </div>
                <div className="groupInputBorn row">
                  <div
                    className="input-date col-6"
                    onClick={() => setShowTableBirth(!showTableBirth)}
                  >
                    <DatePicker
                      selected={birthDay}
                      placeholderText="dd/mm/yy"
                      disabledKeyboardNavigation
                      readOnly
                    ></DatePicker>
                    {/* {changeBirthDay} */}
                    <span className="buttonDate">
                      <i className="far fa-calendar-alt" />
                    </span>
                  </div>
                  <div className="col-6 d-flex pr-0 pl-2">
                    <div
                      className="
                                    input-radio
                                    d-flex
                                    align-items-center
                                    justify-content-around
                                    w-50
                                    "
                    >
                      <label htmlFor="men">nam</label>
                      <label className="customRadio">
                        <input
                          type="radio"
                          name="radioSort"
                          id="men"
                          defaultChecked
                          value="men"
                          onChange={() => setNewGender("men")}
                        />
                        <span className="checkMark" />
                      </label>
                    </div>
                    <div
                      className="
                                    input-radio
                                    d-flex
                                    justify-content-around
                                    align-items-center
                                    w-50
                                    "
                    >
                      <label htmlFor="women">nữ</label>
                      <label className="customRadio">
                        <input
                          type="radio"
                          name="radioSort"
                          id="women"
                          value="women"
                          onChange={() => setNewGender("women")}
                        />
                        <span className="checkMark" />
                      </label>
                    </div>
                  </div>
                </div>
              </li>
              {/*Ngày Sinh*/}
              <li className="inputValue mb-3">
                <div className="inputLabel">
                  <label>Địa Chỉ:</label>
                </div>
                <div className="input--text">
                  <input
                    type="text"
                    value={newStreet}
                    onChange={getNewStreet}
                  />
                </div>
              </li>
              {/*Địa Chỉ*/}
              <li className="inputValue mb-3">
                <div className="inputLabel">
                  <label>Khu Vực:</label>
                </div>
                <div className="input--text inputSearch">
                  <input
                    type="text"
                    placeholder="Chọn Tỉnh/Tp - Quận/Huyện"
                    value={newZipCode}
                    onChange={getNewZipCode}
                  />
                </div>
              </li>
              {/*Khu Vực*/}
              <li className="inputValue mb-3">
                <div className="inputLabel">
                  <label>Phường Xã:</label>
                </div>
                <div className="input--text inputSearch">
                  <input
                    type="text"
                    placeholder="Chọn Chọn Phường/Xã"
                    value={newCity}
                    onChange={getNewCity}
                  />
                </div>
              </li>
              {/*Phường Xã*/}
            </ul>
          </div>
          {/*End Info right*/}
          <div className="formDKKH--infoLeft col-5 pl-4">
            <ul>
              <li className="inputValue inputLoaiKH mb-3">
                <div className="inputLabel">
                  <label>Loại Khách Hàng:</label>
                </div>
                <div className="groupInputLoaiKH d-flex">
                  <div
                    className="
                                    loaiKH__conTy
                                    d-flex
                                    justify-content-around
                                    align-items-center
                                    w-50
                                "
                  >
                    <span>
                      <label htmlFor="congTy" className="font-14">
                        Công Ty
                      </label>
                    </span>
                    <label className="customRadio">
                      <input
                        type="radio"
                        name="formDK--loaiKH"
                        id="congTy"
                        value="company"
                        onChange={() => setTypeOfUser("company")}
                      />
                      <span className="checkMark" />
                    </label>
                  </div>
                  <div
                    className="
                                    loaiKH__caNhan
                                    d-flex
                                    justify-content-around
                                    align-items-center
                                    w-50
                                "
                  >
                    <span>
                      <label htmlFor="caNhan" className="font-14">
                        Cá Nhân
                      </label>
                    </span>
                    <label className="customRadio">
                      <input
                        type="radio"
                        name="formDK--loaiKH"
                        id="caNhan"
                        value="personal"
                        defaultChecked
                        onChange={() => setTypeOfUser("personal")}
                      />
                      <span className="checkMark" />
                    </label>
                  </div>
                </div>
              </li>
              <li className="inputValue mb-3">{nameCompany()}</li>

              {/*Loại Khách Hàng*/}
              <li className="inputValue mb-3">
                <div className="inputLabel">
                  <label>Mã Số Thuế:</label>
                </div>
                <div className="input--text">
                  <input
                    type="text"
                    value={newMaSoThue}
                    onChange={getNewMaSoThue}
                  />
                </div>
              </li>
              {/*Mã Số Thuế*/}
              <li className="inputValue mb-3">
                <div className="inputLabel">
                  <label>FaceBook:</label>
                </div>
                <div className="input--text">
                  <input
                    type="text"
                    value={newFaceBook}
                    onChange={getNewFaceBook}
                  />
                </div>
              </li>
              {/*FaceBook*/}
              <li className="inputValue mb-3">
                <div className="inputLabel">
                  <label>Email:</label>
                </div>
                <div className="input--text">
                  <input type="text" value={newEmail} onChange={getNewEmail} />
                </div>
              </li>
              {/*Email*/}
              <li className="inputValue mb-3 groupListKH--formPlus">
                <div className="inputLabel">
                  <label>Nhóm:</label>
                </div>
                <div className="input--text" onClick={() => getNewNhomKH()}>
                  <input type="text" value={newNhomKH} readOnly />
                </div>
                <div
                  className="listNhomKH"
                  style={showListKH === false ? { display: "none" } : {}}
                  onClick={() => getNewNhomKH()}
                >
                  {loadItemKH()}
                </div>
              </li>
              {/*Nhóm*/}
              <li className="inputValue mb-3">
                <div className="inputLabel">
                  <label>Ghi Chú:</label>
                </div>
                <div className="input--text">
                  <input type="text" value={newNote} onChange={getNewNote} />
                </div>
              </li>
              {/*Ghi Chú*/}
            </ul>
          </div>
          {/*End Info left*/}
        </div>
        {/*End content form DKKH*/}
        <div className="formDKKH--button mb-3">
          <button onClick={() => sendNewUser()}>
            <i className="far fa-save mr-2" />
            <span>Lưu</span>
          </button>
          <button className="cancel" onClick={() => props.show()}>
            <i className="fas fa-ban mr-2" />
            <span>Huỷ bỏ</span>
          </button>
        </div>
      </article>
      {/*End Form DKKH*/}
    </>
  );
}

export default FormPlusDT;
