import React, { useEffect } from "react";
import ItemTableDT from "./ItemTableDT";
import { useSelector, useDispatch } from "react-redux";
import { userSelector, getUser } from "../../../Store/Reducer/ReducerUser";

function GroupItem() {
  // ===================== load UserList ====================
  const userList = useSelector(userSelector);
 
  // =============== dùng useEffect để gửi request cho json ==========
  const dispatch = useDispatch();
  useEffect(() => {
    // gửi request to jsonplacerholder
    //dispatch
    dispatch(getUser());
  },[dispatch]);
  // ========================== phần render =============================
  return (
    <>
      {userList.map((user) => (
        <ItemTableDT key={user.id} listen={user}/>
      ))}
    </>
  );
}

export default GroupItem;
