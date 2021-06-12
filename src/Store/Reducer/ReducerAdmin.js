import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// ============================= khai báo action ============================
export const dataNewAdmin = createAsyncThunk(
  "adminAcc/createNewAdmin",
  (value) => {
    const newAdmin = value;
    return newAdmin;
  }
);
// ============================== phần khai báo reducer ===================
const adminAcc = createSlice({
  name: "adminAcc",
  initialState: {
    allAdmin: [
      {
        id: 1,
        firstName: "tuan anh",
        lastName: "nguyen",
        email: "tuananh@1223",
        passWord: "tuananh181993",
        completed: true,
        accLogin:"tuananh123"
      },
    ],
  },
  reducer: {},
  extraReducers: {
    // ======================== tạo mới tài khoản Admin ==================
    [dataNewAdmin.fulfilled]: (state, action) => {
      const newAcc = action.payload;
      state.allAdmin.push(newAcc);
    },
  },
});

// ===================== reducer khai báo với store ========================
const dataAdmin = adminAcc.reducer;
// ========================== export selector ================================
export const adminsSelector = (state) => state.nameReducerAdmin.allAdmin;
// ========================= export reducer để khai báo với store =========
export default dataAdmin;
