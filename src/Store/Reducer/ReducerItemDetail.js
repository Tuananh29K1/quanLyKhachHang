import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const itemDetaillKH = createSlice({
  name: "itemDeatilsKH",
  initialState: {
    allItemDetailKH: [
      {
        id: 1,
        tenNhomKH: "VIP",
        discount: "30%",
        note: "Đây là nhóm VIP của công ty",
        completed: false,
      },
      {
        id: 2,
        tenNhomKH: "Anh Em",
        discount: "10%",
        note: "Chương trình ưu đãi dành cho công ty Anh Em",
        completed: false,
      },
    ],
  },
  reducers: {
    addItemKH: {
      reducer(state, action) {
        state.allItemDetailKH.unshift(action.payload);
      },
      prepare(tenNhomKH, discount, note) {
        return {
          payload: {
            id: nanoid(),
            tenNhomKH: tenNhomKH,
            discount: discount,
            note: note,
            completed: false,
          },
        };
      },
    },
  },
});

// =================== reducer ==========================
const dataNhomKH = itemDetaillKH.reducer;

// ======================== selector =======================
export const itemKHSelector = (state) =>
  state.nameReducerNhomKH.allItemDetailKH;

// ========================== action ===========================
export const { addItemKH } = itemDetaillKH.actions;

// ========================== export Reducer =====================
export default dataNhomKH;
