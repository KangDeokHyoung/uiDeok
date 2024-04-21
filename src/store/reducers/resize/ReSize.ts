import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/configStore";

interface State {
  resize: number;
  viewType: boolean;
}

const initialState: State = {
  resize: 0,
  viewType: false,
};

export const reSizeSlice = createSlice({
  name: "resize",
  initialState,
  reducers: {
    setData: (state, { payload }: PayloadAction<number>) => {
      state["resize"] = payload;
    },
    setViewType: (state, { payload }: PayloadAction<boolean>) => {
      state["viewType"] = payload;
    },

    // removeData: (state) => {
    //   state["account"] = { ...initialState.account };
    // },
  },
});

const viewTypeAcrion = createAsyncThunk("viewType", async (_, { dispatch, getState }) => {
  const { resize } = getState() as RootState;
  const { resize: size, viewType } = resize;
  if (size > 768) {
    dispatch(reSizeSlice.actions.setViewType(true));
  } else {
    dispatch(reSizeSlice.actions.setViewType(false));
  }
});

export const reSizeActions = { ...reSizeSlice.actions, viewTypeAcrion };
