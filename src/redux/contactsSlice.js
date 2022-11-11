import { createSlice } from "@reduxjs/toolkit";
import { getContactsThunk, postContactThunk } from "./contactsThunks";

const contactsInitialState = {
  items: [],
  total: 0,
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  extraReducers: {
    [getContactsThunk.pending](state) {
      state.isLoading = true;
    },
    [getContactsThunk.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items = [...state.items, ...payload.items];
      state.total = payload.total;
    },
    [getContactsThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [postContactThunk.pending](state) {
      state.isLoading = true;
    },
    [postContactThunk.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items = [...state.items, payload];
    },
    [postContactThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
