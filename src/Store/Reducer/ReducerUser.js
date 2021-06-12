import {
  createAsyncThunk,
  createSlice,
  findNonSerializableValue,
} from "@reduxjs/toolkit";
import axios from "axios";
import moment from "moment";
// =============================== export reducer thunk get data=======================
export const getUser = createAsyncThunk("user/userFetched", async () => {
  const responce = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return responce.data;
});

// ================================ export reducer thunk add data =========================
export const addUser = createAsyncThunk(
  "user/addUser",
  async (newUserClient) => {
    // ======================= tạo đối tượng mới =========================
    const newUser = newUserClient;
    // =========================== lưu lại đối tượng đó trong backend ============
    await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
    // =========================== lưu vào allUser trong Slice ======================
    return newUser;
  }
);

// ==========================================================================================
// ================================ export reducer thunk delete data =====================
export const deleteChoiceUser = createAsyncThunk(
  "user/deleteUser",
  async (userId) => {
    // =================== thay đổi trong backend =======================

    await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);

    // ======================= thay đổi ở UI ===============================
    return userId;
  }
);
// =============================== update phần khách hàng =========================
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ userId, newUserClient }) => {
    const newUserUpdate = newUserClient;
    // ============================ xoá phần tử trên database =========================
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);

    // ============================ in đè phần tử trên database =========================
    await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newUserUpdate
    );
    return newUserUpdate;
  }
);
// export const updateUser = createAsyncThunk(
//   "user/updateUser",
//   async ({ userId, newUserClient}) => {
//     const newUserUpdate = newUserClient;
//     let a = await axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     console.log(a);
//      const responce =  await axios.get("https://jsonplaceholder.typicode.com/users")
//      console.log(`${newUserUpdate}, ${responce}`);
//      return (newUserUpdate , responce);
//   }
// );
// =================== tìm kiếm tên khách hàng=============================
export const searchDataUser = createAsyncThunk("user/search", (value) => {
  const valueSearch = value;
  return valueSearch;
});
// ============================ sort NhomKH =================================
export const sortDataUser = createAsyncThunk(
  "user/sortDataNhomKHUser",
  (value) => {
    const valueNhomKHSort = value;
    return valueNhomKHSort;
  }
);
// ================================ sort Ngày Tạo ==============================
export const sortDateUser = createAsyncThunk("user/sortDateUser", (value) => {
  const valueDateSort = value;
  return valueDateSort;
});
// ====================================== sort Ngày Sinh Nhật ========================
export const sortDateBirthDay = createAsyncThunk(
  "user/sortBirthDay",
  (value) => {
    const valueBirthDay = value;
    return valueBirthDay;
  }
);
// =================================== sort Giới Tính Khách Hàng ==================
export const sortDataGenderUser = createAsyncThunk(
  "user/sortDataGender",
  (value) => {
    const valueGenderSort = value;
    return valueGenderSort;
  }
);
// ==================================== sort Loại Khách Hàng =========================
export const sortDataLoaiKH = createAsyncThunk(
  "user/sortDataLoaiKH",
  (value) => {
    const valueDataLoaiKH = value;
    return valueDataLoaiKH;
  }
);
// ======================================= sort trạng thái ==============================
export const sortDataStatus = createAsyncThunk("user/sortStatus", (value) => {
  const valueStatus = value;
  return valueStatus;
});
// =====================================================================
// ================================ Slice ===========================
const userSlice = createSlice({
  name: "user",
  initialState: {
    allUser: [],
  },
  reducers: {},
  extraReducers: {
    // =========================== xử lý dữ liệu từ json Data==============
    [getUser.pending]: (state, action) => {
      console.log("đang lấy giữ liệu chờ tí");
    },
    [getUser.fulfilled]: (state, action) => {
      console.log("done");
      state.allUser = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      console.log("Thất Bại, hãy thử lại");
    },
    // ============================= xoá xữ liệu ở phía backend ===========
    [deleteChoiceUser.fulfilled]: (state, action) => {
      const userId = action.payload;
      state.allUser = state.allUser.filter((user) => user.id != userId);
    },
    // =============================== add user mới lên backend ================
    [addUser.fulfilled]: (state, action) => {
      state.allUser.unshift(action.payload);
    },
    // =============================== update thông tin user ======================
    [updateUser.fulfilled]: (state, action) => {
      const userUpdate = action.payload;
      state.allUser = state.allUser.filter((user) => user.id != userUpdate.id);
      state.allUser.unshift(userUpdate);
    },
    // ========================= tìm kiếm tên Khách Hàng ==============================
    [searchDataUser.fulfilled]: (state, action) => {
      const value = action.payload;
      state.allUser = state.allUser.filter(
        (user) => user.name.indexOf(value) !== -1
      );
    },
    // ============================== tìm kiếm qua số điện thoại =========================
    [searchDataUser.fulfilled]: (state, action) => {
      const value = action.payload;
      state.allUser = state.allUser.filter(
        (user) => user.phone.indexOf(value) !== -1
      );
    },
    // ======================================== sort theo nhóm khách hàng ====================
    [sortDataUser.fulfilled]: (state, action) => {
      const value = action.payload;
      if (value !== "Tất cả các nhóm") {
        state.allUser = state.allUser.filter((user) => user.nhomKH === value);
      } else {
        state.allUser = state.allUser.filter((user) => user.nhomKH != value);
      }
    },
    // =========================================== sort theo ngày tạo ===========================
    [sortDateUser.fulfilled]: (state, action) => {
      const valueEnd = action.payload.end;
      const valueStart = action.payload.start;
      state.allUser = state.allUser.filter((user) => {
        if (user.valueDateBornUser > valueStart) {
          return user;
        } else if (user.valueDateBornUser < valueEnd) {
          return user;
        }
      });
    },
    // ================================================ sort theo sinh nhật ===========================
    [sortDateBirthDay.fulfilled]: (state, action) => {
      const valueEnd = action.payload.end;
      const valueStart = action.payload.start;
      state.allUser = state.allUser.filter((user) => {
        if (user.birthDay !== undefined) {
          if (
            moment(user.birthDay).isBetween(valueStart, valueEnd, undefined, [])
          ) {
            console.log(
              `start: ${valueStart} end: ${valueEnd} user: ${typeof user.birthDay}`
            );
            return user;
          }
        }
      });
    },
    // ============================================== sort theo giới tính ==========================
    [sortDataGenderUser.fulfilled]: (state, action) => {
      const valueGender = action.payload;
      state.allUser = state.allUser.filter((user) => {
        if (valueGender !== "Tất Cả") {
          return user.gender === valueGender;
        } else {
          return user;
        }
      });
    },
    // =============================================== sort theo Loại Kh ==============================
    [sortDataLoaiKH.fulfilled]: (state, action) => {
      const valueLoaiKH = action.payload;
      state.allUser = state.allUser.filter((user) => {
        if (valueLoaiKH !== "Tất Cả") {
          return user.loaiKH === valueLoaiKH;
        } else {
          return user;
        }
      });
    },
    // ============================================= sort theo status ====================================
    [sortDataStatus.fulfilled]: (state, action) => {
      const valueStatus = action.payload;
      state.allUser = state.allUser.filter((user) => {
        if (valueStatus !== "Tất Cả") {
          return user.trangThai === valueStatus;
        } else {
          return user;
        }
      });
    },
    // ================================= end reducer =====================================
  },
});
// =========================== reducer khai báo với store ===================
const dataUser = userSlice.reducer;
// ==================================== action ====================

// ======================== export selector ==========================
export const userSelector = (state) => state.nameReducerUser.allUser;
//  ======================== export reducer =================
export default dataUser;
