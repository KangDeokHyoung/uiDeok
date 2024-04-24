import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  resize: number;
  mobileMenuToggle: boolean;
  isMobile: boolean;
}

const initialState: State = {
  resize: 0,
  mobileMenuToggle: false,
  isMobile: false,
};

export const reSizeSlice = createSlice({
  name: "resize",
  initialState,
  reducers: {
    setResize: (state, { payload }: PayloadAction<number>) => {
      state["resize"] = payload;
    },
    setMobileToggle: (state, { payload }: PayloadAction<boolean>) => {
      state["mobileMenuToggle"] = payload;
    },
    setIsMobile: (state, { payload }: PayloadAction<boolean>) => {
      state["isMobile"] = payload;
    },
  },
});

export const reSizeActions = { ...reSizeSlice.actions };
