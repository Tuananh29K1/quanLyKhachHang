import { configureStore } from "@reduxjs/toolkit";
import dataListTitleDetails from "./Reducer/ReducerListDetail";
import dataNhomKH from "../Store/Reducer/ReducerItemDetail";
import dataUser from "../Store/Reducer/ReducerUser";
import dataAdmin from "../Store/Reducer/ReducerAdmin";
// ======================= Store ========================
const store = configureStore({
  reducer: {
    nameReducer: dataListTitleDetails,
    nameReducerNhomKH: dataNhomKH,
    nameReducerUser: dataUser,
    nameReducerAdmin: dataAdmin,
  },
});

// ========================= Export =========================
export default store;
