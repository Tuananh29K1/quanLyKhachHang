import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../Store/Reducer/ReducerUser";
import { itemKHSelector } from "../../../Store/Reducer/ReducerItemDetail";
import DatePicker from "react-datepicker";
import moment from "moment";

function FormUpdateDT(props) {
  const dispatch = useDispatch();
  // ============================== gán biến cho user ================
  const user = props.user;
  // ================================== lấy thông tin ban đầu ===========
  const [updateName, setUpdateName] = useState(user.name);
  const [updateMKH, setUpdateMKH] = useState(user.id);
  const [updatePhone, setUpdatePhone] = useState(user.phone);
  const [updateCity, setUpdateCity] = useState(user.address.city);
  const [updateZipcode, setUpdateZipCode] = useState(user.address.zipcode);
  const [updateStreet, setUpdateStreet] = useState(user.address.street);
  const [updateGender, setUpdateGender] = useState(user.gender);
  const [updateLoaiKH, setUpdateLoaiKH] = useState(user.loaiKH);
  const [updateMaSoThue, setUpdateMaSoThue] = useState(user.maSoThue);
  const [updateFaceBook, setUpdateFaceBook] = useState(user.facebook);
  const [updateEmail, setUpdateEmail] = useState(user.email);
  const [updateNote, setUpdateNote] = useState(user.note || user.website);
  const [updateNhomKH, setUpdateNhomKH] = useState(user.nhomKH);
  const [updateNameCompany, setUpdateNameCompany] = useState(user.company.name);
  const [oldBirthday, setOldBirthday] = useState(user.birthDay || "");
  console.log(oldBirthday);
  // ============================ convert birtday =============================
  const [updateBirthDay, setUpdateBirthDay] = useState("");
  const birthday = moment(updateBirthDay).format("l").toString();
  // ============================== update thông tin =======================
  const newUpdateUser = {
    ...user,
    id: updateMKH,
    name: updateName,
    phone: updatePhone,
    gender: updateGender,
    birthDay: birthday,
    loaiKH: updateLoaiKH,
    maSoThue: updateMaSoThue,
    email: updateEmail,
    facebook: updateFaceBook,
    nhomKH: updateNhomKH,
    note: updateNote,
    // company: {
    //   name: newNameCompany,
    // },
    address: {
      city: updateCity,
      zipcode: updateZipcode,
      street: updateStreet,
    },
    trangThai: "Đang Hoạt Động",
  };
  const tenmoi = async () => {
    try {
      await dispatch(
        updateUser({ userId: newUpdateUser.id, newUserClient: newUpdateUser })
      );
      props.saveUpdate();
      props.close();
    } catch (error) {
      console.log("Không cập nhật được newUpdateUser");
    }
  };
  // =============================== lấy thông tin thay đổi ================
  function updateNewName(event) {
    setUpdateName(event.target.value);
  }
  function updateNewMKH(event) {
    setUpdateMKH(event.target.value);
  }
  function updateNewPhone(event) {
    setUpdatePhone(event.target.value);
  }
  // function updateNewBirthDay(event) {
  //   setUpdateBirthDay(event.target.value);
  // }
  function updateNewCity(event) {
    setUpdateCity(event.target.value);
  }
  function updateNewZipcode(event) {
    setUpdateZipCode(event.target.value);
  }
  function updateNewStreet(event) {
    setUpdateStreet(event.target.value);
  }
  function updateNewMaSoThue(event) {
    setUpdateMaSoThue(event.target.value);
  }
  function updateNewFaceBook(event) {
    setUpdateFaceBook(event.target.value);
  }
  function updateNewEmail(event) {
    setUpdateEmail(event.target.value);
  }
  function updateNewNote(event) {
    setUpdateNote(event.target.value);
  }
  function UpateNewNameCompany(event) {
    setUpdateNameCompany(event.target.value);
  }
  function UpdateNewLoaiKH() {
    setUpdateLoaiKH("personal");
    setUpdateNameCompany(user.company.name);
  }
  // ============================= add nhóm khách hàng ==================
  const [showListKH, setShowListKH] = useState(false);
  const itemKH = useSelector(itemKHSelector);

  function addNhomKH() {
    setShowListKH(!showListKH);
    console.log("đã đổi");
  }

  function loadItemKH() {
    console.log("ok");
    if (showListKH === true) {
      const listKH = itemKH.map((item) => (
        <div
          className="itemSelect mt-2 listItemKH--item"
          key={item.id}
          onClick={() => setUpdateNhomKH(item.tenNhomKH)}
        >
          <span>{item.tenNhomKH}</span>
        </div>
      ));
      return listKH;
    }
  }
  // ============================== type of company =========================
  function nameCompany() {
    if (updateLoaiKH === "company") {
      return (
        <div>
          <div className="inputLabel">
            <label>Tên Công Ty:</label>
          </div>
          <div className="input--text">
            <input
              type="text"
              value={updateNameCompany}
              onChange={UpateNewNameCompany}
            />
          </div>
        </div>
      );
    }
  }
  // =============================== thay đổi birth ======================
  const [showTableBirth, setShowTableBirth] = useState(false);
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
              selected={updateBirthDay}
              onChange={(date) => setUpdateBirthDay(date)}
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
  // ========================== phần render =======================
  return (
    <>
      <div className="overlay"></div>
      <article className="formDKKH">
        <span className="formDKKH--caption px-3">
          <p>
            Khách Hàng ID: 000/{user.id}
            <span className="ml-2 pl-2">
              Chi nhánh tạo: Chi nhánh trung tâm
            </span>
          </p>
          <aside onClick={() => props.close()}>
            <i className="fas fa-times" />
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
                  <input
                    type="text"
                    value={updateMKH != "" ? updateMKH : ""}
                    onChange={updateNewMKH}
                  />
                </div>
              </li>
              {/*Mã khách hàng*/}
              <li className="inputValue mb-3">
                <div className="inputLabel">
                  <label>Tên khách hàng:</label>
                </div>
                <div className="input--text">
                  <input
                    type="text"
                    value={updateName != "" ? updateName : ""}
                    onChange={updateNewName}
                  />
                </div>
              </li>
              {/*Tên khách hàng*/}
              <li className="inputValue mb-3">
                <div className="inputLabel">
                  <label>Điện Thoại:</label>
                </div>
                <div className="input--text mb-3">
                  <input
                    type="text"
                    value={updatePhone != "" ? updatePhone : ""}
                    onChange={updateNewPhone}
                  />
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
                      selected={updateBirthDay}
                      placeholderText={
                        oldBirthday !== "" ? oldBirthday : "dd/mm/yyyy"
                      }
                      disabledKeyboardNavigation
                      readOnly
                    ></DatePicker>
                    {changeBirthDay}
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
                          checked={updateGender === "men"}
                          value="men"
                          onChange={() => setUpdateGender("men")}
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
                          checked={updateGender === "women"}
                          value="women"
                          onChange={() => setUpdateGender("women")}
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
                    value={updateStreet != "" ? updateStreet : ""}
                    onChange={updateNewStreet}
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
                    value={updateZipcode != "" ? updateZipcode : ""}
                    onChange={updateNewZipcode}
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
                    value={updateCity != "" ? updateCity : ""}
                    onChange={updateNewCity}
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
                        checked={updateLoaiKH === "company"}
                        value="company"
                        onChange={() => setUpdateLoaiKH("company")}
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
                        checked={updateLoaiKH === "personal"}
                        value="personal"
                        onChange={() => UpdateNewLoaiKH()}
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
                    value={updateMaSoThue != "" ? updateMaSoThue : ""}
                    onChange={updateNewMaSoThue}
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
                    value={updateFaceBook != "" ? updateFaceBook : ""}
                    onChange={updateNewFaceBook}
                  />
                </div>
              </li>
              {/*FaceBook*/}
              <li className="inputValue mb-3">
                <div className="inputLabel">
                  <label>Email:</label>
                </div>
                <div className="input--text">
                  <input
                    type="text"
                    value={updateEmail != "" ? updateEmail : ""}
                    onChange={updateNewEmail}
                  />
                </div>
              </li>
              {/*Email*/}
              <li className="inputValue mb-3">
                <div className="inputLabel">
                  <label>Nhóm:</label>
                </div>
                <div className="input--text">
                  <input
                    type="text"
                    readOnly
                    value={updateNhomKH != "" ? updateNhomKH : ""}
                    onClick={() => addNhomKH()}
                  />
                </div>
                <div
                  className="listNhomKH updateNhom"
                  style={showListKH === false ? { display: "none" } : {}}
                  onClick={() => addNhomKH()}
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
                  <input
                    type="text"
                    value={updateNote != "" ? updateNote : ""}
                    onChange={updateNewNote}
                  />
                </div>
              </li>
              {/*Ghi Chú*/}
            </ul>
          </div>
          {/*End Info left*/}
        </div>
        {/*End content form DKKH*/}
        <div className="formDKKH--button mb-3">
          <button onClick={() => tenmoi()}>
            <i className="far fa-save mr-2" />
            <span>Lưu</span>
          </button>
          <button className="cancel" onClick={() => props.close()}>
            <i className="fas fa-ban mr-2" />
            <span>Huỷ bỏ</span>
          </button>
        </div>
      </article>
      {/*End Form DKKH*/}
    </>
  );
}

export default FormUpdateDT;
