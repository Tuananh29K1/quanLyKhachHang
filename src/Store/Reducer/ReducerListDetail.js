import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    allTitleDetailKH: [
      {
        id: 1,
        title: "Mã Khách Hàng",
        completed: true,
      },
      {
        id: 2,
        title: "Tên Khách Hàng",
        completed: true,
      },
      {
        id: 3,
        title: "Loại Khách Hàng",
        completed: false,
      },
      {
        id: 4,
        title: "Điện Thoại",
        completed: true,
      },
      {
        id: 5,
        title: "Nhóm Khách Hàng",
        completed: false,
      },
      {
        id: 6,
        title: "Giới Tính",
        completed: false,
      },
      {
        id: 7,
        title: "Ngày Sinh",
        completed: false,
      },
      {
        id: 8,
        title: "Email",
        completed: true,
      },
      {
        id: 9,
        title: "FaceBook",
        completed: false,
      },
      {
        id: 10,
        title: "Công Ty",
        completed: false,
      },
      {
        id: 11,
        title: "Mã Số Thuế",
        completed: false,
      },
      {
        id: 12,
        title: "Địa Chỉ",
        completed: false,
      },
      {
        id: 13,
        title: "Khu Vực Giao Hàng",
        completed: true,
      },
      {
        id: 14,
        title: "Phường/ Xã",
        completed: false,
      },
      {
        id: 15,
        title: "Người Tạo",
        completed: false,
      },
      {
        id: 16,
        title: "Ngày Tạo",
        completed: false,
      },
      {
        id: 17,
        title: "Ghi Chú",
        completed: false,
      },
      {
        id: 18,
        title: "Ngày Giao Dịch Cuối",
        completed: false,
      },
      {
        id: 19,
        title: "Nợ Hiện Tại",
        completed: false,
      },
      {
        id: 20,
        title: "Tổng Bán",
        completed: false,
      },
      {
        id: 21,
        title: "Tổng Bán Trừ Trả Hàng",
        completed: false,
      },
      {
        id: 22,
        title: "Trạng Thái",
        completed: false,
      },
    ],
  },
  reducers:{
    showTitle(state, action){
      const titleId = action.payload;
      state.allTitleDetailKH = state.allTitleDetailKH.map(title => {
        if(title.id === titleId){
          title.completed = ! title.completed;
        }
        return title;
      })
    }
  },
});
// ================= Reducer ==========================
const dataListTitleDetails = todosSlice.reducer;

// ================== selector ================================
export const todosSelector = (state) => state.nameReducer.allTitleDetailKH;

// ============================== action ============================

export const { showTitle } = todosSlice.actions;
// ========================== export Reducer =====================
export default dataListTitleDetails;
