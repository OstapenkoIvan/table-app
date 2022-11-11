import { configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "./contactsSlice";

export const store = configureStore({
  reducer: { contacts: contactsReducer },
  devTools: process.env.NODE_ENV === "development",
});
