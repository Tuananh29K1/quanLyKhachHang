import React, { useState } from "react";
import NavTab from "./NavTab";
import { useSelector } from "react-redux";
import { todosSelector } from "../../../Store/Reducer/ReducerListDetail";

function ItemTableDT(props) {
  const todos = useSelector(todosSelector);
  // ================================== gán user trong list vào 1 biến ==========================
  const userItem = props.listen;

  // ============================== lấy user truyền xuống nav =======================
  const [showDetail, setShowDetail] = useState(false);
  const [getUser, setGetUser] = useState(null);
  function showDetails() {
    setShowDetail(!showDetail);
  }
  function loadItem() {
    if (showDetail === false) {
      const item = todos.map((todo) => {
        return (
          <td
            key={todo.id}
            className={todo.completed === false ? "hide" : ""}
            style={todo.id === 1 ? { width: "150px" } : {}}
          >
            {userItem === null ? "" : renderItem(todo.id)}
          </td>
        );
      });
      return item;
    } else {
      const item = todos.map((todo) => {
        return (
          <td
            key={todo.id}
            className={
              todo.completed === false
                ? "changeColorDetails hide"
                : "changeColorDetails"
            }
            style={todo.id === 1 ? { width: "150px" } : {}}
          >
            {userItem === null ? "" : renderItem(todo.id)}
          </td>
        );
      });
      return item;
    }
  }
  function listen() {
    setGetUser(props.listen);
    setShowDetail(!showDetail);
  }
  // ================================= rednder userItem ====================
  function renderItem(key) {
    switch (key) {
      case 1:
        return userItem.id;
      case 2:
        return userItem.name;
      case 3:
        return userItem.loaiKH;
      case 4:
        return userItem.phone;
      case 5:
        return userItem.nhomKH;
      case 6:
        return userItem.gender;
      case 7:
        return userItem.birthDay;
      case 8:
        return userItem.email;
      case 9:
        return userItem.facebook;
      case 10:
        return userItem.company.name;
      case 11:
        return userItem.maSoThue;
      case 12:
        return userItem.address.city;
      case 13:
        return userItem.address.zipcode;
      case 14:
        return userItem.address.street;
      case 15:
        return userItem.username;
      case 16:
        return userItem.dateBornUser;
      case 17:
        return userItem.website || userItem.note;
      case 18:
        return "chưa có";
      case 19:
        return "0";
      case 20:
        return "0";
      case 21:
        return "ok";
      case 22:
        return userItem.trangThai;
      default:
        break;
    }
  }
  // ===================== Phần Render ==================================
  return (
    <>
      {/* =========================== render list user ======================= */}
      <tr onClick={() => listen()}>
        <td
          className={
            showDetail === true ? "witdh-50 changeColorDetails" : "witdh-50"
          }
        >
          <label className="customCheck">
            <input type="checkbox" />
            <span className="checkMark--check" />
          </label>
        </td>
        {loadItem()}
      </tr>
      <NavTab user={getUser} show={showDetail} closeNav={showDetails} />
    </>
  );
}

export default ItemTableDT;
