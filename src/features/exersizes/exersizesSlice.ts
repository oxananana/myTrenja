import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { exersizesJSON } from "../../data/exersizesJSON";
import { Exersize } from "../../entities/exersize";

const exersizesSlice = createSlice({
  name: "exersizes",
  initialState: exersizesJSON,
  reducers: {
    addExersize(state, action: PayloadAction<Exersize>) {
      const exersize = action.payload;
      state[exersize.id] = exersize;
    },
    editExersize(state, action: PayloadAction<Exersize>) {
      const exersize = action.payload;
      let prevExersize = state[exersize.id];
      prevExersize = { ...prevExersize, ...exersize };
    },
    deleteExersize(state, action: PayloadAction<{ id: string }>) {
      delete state[action.payload.id];
    },
  },
});

export const {
  addExersize,
  editExersize,
  deleteExersize,
} = exersizesSlice.actions;

export const exersizesReducer = exersizesSlice.reducer;
