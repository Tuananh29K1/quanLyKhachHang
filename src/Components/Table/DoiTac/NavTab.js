import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteChoiceUser } from "../../../Store/Reducer/ReducerUser";
import { todosSelector } from "../../../Store/Reducer/ReducerListDetail";

import FormUpdateDT from "./FormUpdateDT";

function NavTab(props) {
  const todos = useSelector(todosSelector);
  // ==================================== gán biến cho user lấy được từ itemTable ========
  const userItem = props.user;
  const [userUpdate, setUserUpdate] = useState(null);
  const dispatch = useDispatch();
  // ================================= thay đổi nav-bar ==============
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  // ==================================== lấy user cho form ===================================
  function getUserUpdate() {
    setUserUpdate(props.user);
  }
  // ======================================= hiển thị form update ===========================
  const [formUpdate, setFormUpdate] = useState(false);
  function updateUser() {
    // ==================== tắt bật form update ==================
    setFormUpdate(!formUpdate);
    // =========================== lấy giữ liệu cho form update ========
    getUserUpdate();
  }
  function showFormUpdate() {
    if (formUpdate === true) {
      return (
        <tr>
          <td>
            <FormUpdateDT
              close={updateUser}
              user={userUpdate}
              saveUpdate={props.closeNav}
            />
          </td>
        </tr>
      );
    }
  }
  // =========================================== xoá user ======================================
  function deleteUser(userId) {
    dispatch(deleteChoiceUser(userId));
  }

  // ================================= load user từ itemTable =========================
  function loadUser() {
    if (props.show === true) {
      return (
        <tr>
          <td
            conlspan={4}
            id="detailAccount"
            className={props.show === true ? "changeBorder" : "noChange"}
          >
            <ul
              className={
                props.show === true
                  ? "nav nav-tabs changeColorDetails"
                  : "nav nav-tabs"
              }
            >
              <li className="nav-item">
                <div
                  onClick={() => toggleTab(1)}
                  className={toggleState == 1 ? "tab-active" : "nav-link"}
                  id="tab-thongTin"
                >
                  Thông Tin
                </div>
              </li>
              <li className="nav-item">
                <div
                  onClick={() => toggleTab(2)}
                  className={toggleState == 2 ? "tab-active" : "nav-link"}
                  id="tab-DCNH"
                >
                  Địa Chỉ Nhận Hàng
                </div>
              </li>
              <li className="nav-item">
                <div
                  onClick={() => toggleTab(3)}
                  className={toggleState == 3 ? "tab-active" : "nav-link"}
                  id="tab-NCT"
                >
                  Nợ Cần Thu
                </div>
              </li>
            </ul>
            {/*Tab*/}
            <div className="tab-content" id="myTabContent">
              <div
                colSpan={5}
                className={
                  toggleState == 1 ? "tab--thongTin" : "tab--thongTin hide"
                }
              >
                <div className="contentThongTin row">
                  <div className="maxWidth col-3">
                    <div className="avatar--thongTin">
                      <img src="https://via.placeholder.com/220x400" alt="anhDaiDien" />
                    </div>
                  </div>
                  {/*Avatar*/}
                  <div className="col-7 row pt-3">
                    <div className="col-6">
                      <div className="groupInfo d-flex mb-3">
                        <span className="groupInfo--title w-50">
                          Mã Khách Hàng:
                        </span>
                        <span className="groupInfo--content groupInfo--content--MKH w-50">
                          {userItem.id}
                        </span>
                      </div>
                      {/*Mã khách hàng*/}
                      <div className="groupInfo d-flex mb-3">
                        <span className="groupInfo--title w-50">
                          Tên Khách Hàng:
                        </span>
                        <span className="groupInfo--content w-50">
                          {userItem.name}
                        </span>
                      </div>
                      {/*Tên khách hàng*/}
                      <div className="groupInfo d-flex mb-3">
                        <span className="groupInfo--title w-50">
                          Ngày Sinh:
                        </span>
                        <span className="groupInfo--content w-50">
                          {userItem.birthDay}
                        </span>
                      </div>
                      {/*Ngày Sinh*/}
                      <div className="groupInfo d-flex mb-3">
                        <span className="groupInfo--title w-50">Nhóm KH:</span>
                        <span className="groupInfo--content w-50">
                          {userItem.nhomKH}
                        </span>
                      </div>
                      <div className="groupInfo d-flex mb-3">
                        <span className="groupInfo--title w-50">
                          Mã Số Thuế:
                        </span>
                        <span className="groupInfo--content w-50">
                          {userItem.maSoThue}
                        </span>
                      </div>
                      {/*Mã số thuế*/}
                      <div className="groupInfo d-flex mb-3">
                        <span className="groupInfo--title w-25">Email:</span>
                        <span className="groupInfo--content w-75 font-14-300">
                          {userItem.email}
                        </span>
                      </div>
                      {/*Email*/}
                      <div className="groupInfo d-flex mb-3">
                        <span className="groupInfo--title w-50">FaceBook:</span>
                        <span className="groupInfo--content w-50">
                          {userItem.facebook}
                        </span>
                      </div>
                      {/*FaceBook*/}
                    </div>
                    {/*End info Right*/}
                    <div className="col-6">
                      <div className="groupInfo d-flex mb-3">
                        <span className="groupInfo--title w-50">
                          Điện Thoại:
                        </span>
                        <span className="groupInfo--content w-50 font-14-300">
                          {userItem.phone}
                        </span>
                      </div>
                      {/*Điện Thoại*/}
                      <div className="groupInfo d-flex mb-3">
                        <span className="groupInfo--title w-50">Địa Chỉ:</span>
                        <span className="groupInfo--content w-50">
                          {userItem.address.city}
                        </span>
                      </div>
                      {/*Địa Chỉ*/}
                      <div className="groupInfo d-flex mb-3">
                        <span className="groupInfo--title w-50">
                          Khu Vực Giao Hàng:
                        </span>
                        <span className="groupInfo--content w-50">
                          {userItem.address.zipcode}
                        </span>
                      </div>
                      {/*Khu Vực Giao Hàng*/}
                      <div className="groupInfo d-flex mb-3">
                        <span className="groupInfo--title w-50">
                          Phường Xã:
                        </span>
                        <span className="groupInfo--content w-50">
                          {userItem.address.street}
                        </span>
                      </div>
                      {/*Phường Xã*/}
                      <div className="groupInfo d-flex mb-3">
                        <span className="groupInfo--title w-50">
                          Người Tạo:
                        </span>
                        <span className="groupInfo--content w-50">
                          Nguyễn Tuấn Anh
                        </span>
                      </div>
                      {/*Người Tạo*/}
                      <div className="groupInfo d-flex mb-3">
                        <span className="groupInfo--title w-50">Ngày Tạo:</span>
                        <span className="groupInfo--content w-50">
                          {userItem.dateBornUser}
                        </span>
                      </div>
                      {/*Ngày Tạo*/}
                    </div>
                    {/*End info Left*/}
                  </div>

                  {/*info account*/}
                  <div className="col-2 lineDoc">
                    <p className="ml-4">Ghi chú:</p>
                    <p className="ml-4 font-14-300">{userItem.website || userItem.note}</p>
                  </div>
                </div>
                {/*End Thông Tin*/}
                <div className="button--thongTin">
                  <button onClick={() => updateUser()}>
                    <i className="fas fa-check-square mr-2" />
                    <span>Cập Nhật</span>
                  </button>
                  <button className="warning">
                    <i className="fas fa-lock mr-2" />
                    <span>Ngừng Hoạt Động</span>
                  </button>
                  <button
                    className="warning"
                    onClick={deleteUser.bind(this, userItem.id)}
                  >
                    <i className="fas fa-trash-alt mr-2" />
                    <span>Xoá</span>
                  </button>
                </div>
                {/*button Thông Tin*/}
              </div>
              {/*End Content Thông Tin Khách Hàng*/}
              <div
                className={toggleState == 2 ? "tab--DCNH" : "tab--DCNH hide"}
              >
                <div className="content--DCNH">
                  <table className="content--DCNH--table">
                    <thead>
                      <tr>
                        <th className="pl-5">Tên Địa Chỉ</th>
                        <th>Tên Người Nhận</th>
                        <th>SĐT Nhận</th>
                        <th>Địa Chỉ Nhận</th>
                        <th>Ngày Tạo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan={5}>
                          <div className="inboxDCNH">
                            <p className="inboxDCNH--icon">
                              <i className="fas fa-inbox" />
                            </p>
                            <p className="inboxDCNH--caption">
                              Không Tìm Thấy Kết Quả Phù Hợp
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/*End ContentDCNH*/}
                <div className="button--DCNH">
                  <button>
                    <i className="fas fa-plus mr-2" />
                    <span>Địa Chỉ Mới</span>
                  </button>
                </div>
                {/*End ButtonDCNH*/}
              </div>
              {/*End Content Địa chỉ nhận hàng*/}
              <div className={toggleState == 3 ? "tab--NCT" : "tab--NCT hide"}>
                <div className="content--NCT">
                  <table className="content--NCT--table">
                    <thead>
                      <tr>
                        <th>Mã Phiếu</th>
                        <th>Thời Gian</th>
                        <th>Loại</th>
                        <th>Giá Trị</th>
                        <th>Dư Nợ Khách Hàng</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>HD00042</td>
                        <td>
                          <span className="mr-2">08/05/2021</span>
                          <span>14:05</span>
                        </td>
                        <td>Thanh Toán</td>
                        <td>-5,213,300</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>HD00042</td>
                        <td>
                          <span className="mr-2">08/05/2021</span>
                          <span>14:05</span>
                        </td>
                        <td>Thanh Toán</td>
                        <td>-5,213,300</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>HD00042</td>
                        <td>
                          <span className="mr-2">08/05/2021</span>
                          <span>14:05</span>
                        </td>
                        <td>Thanh Toán</td>
                        <td>-5,213,300</td>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/*End ContentNCT*/}
                <div className="pagingBox">
                  <div className="pagingBox--back">
                    <a href="#">
                      <span className="step-back" />
                    </a>
                    <a href="#">
                      <span className="back" />
                    </a>
                  </div>
                  <div className="pagingBox--number">
                    <ul className="pagingBox--list">
                      <li>
                        <a href="#" className="mr-2">
                          1
                        </a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                    </ul>
                  </div>
                  <div className="pagingBox--next">
                    <a href="#">
                      <span className="next" />
                    </a>
                    <a href="#">
                      <span className="step-next" />
                    </a>
                  </div>
                </div>
                <div className="button--NCT">
                  <button>
                    <i className="fas fa-sync-alt mr-2" />
                    <span>Điều Chỉnh</span>
                  </button>
                  <button>
                    <i className="fas fa-calculator mr-2" />
                    <span>Thanh Toán</span>
                  </button>
                  <button>
                    <i className="fas fa-file-export mr-2" />
                    <span>Xuất File Công Nợ</span>
                  </button>
                  <button>
                    <i className="fas fa-file-export mr-2" />
                    <span>Xuất File</span>
                  </button>
                </div>
                {/*End ButtonNCT*/}
              </div>
              {/*End Content Nợ Cần Thu*/}
            </div>
            {/*content*/}
          </td>
          {/* {todos.map((todo) => {
            if (todo.id > 6) {
              return (
                <td
                  key={todo.id}
                  className={todo.completed === false ? "hide" : ""}
                ></td>
              );
            }
          })} */}
        </tr>
      );
    }
  }
  // ============================== phần render Nav bar ============================
  return (
    <>
      {loadUser()}
      {showFormUpdate()}
    </>
  );
}

export default NavTab;
