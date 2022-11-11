import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://6347f6cbdb76843976b6ee5d.mockapi.io/contacts";
const LIMIT = 8;

export const getContactsThunk = createAsyncThunk(
  "contacts/getAll",
  async (page, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}?page=${page}&limit=${LIMIT}`, {
        method: "GET",
      });
      const { items, count } = await response.json();

      const total = Math.ceil(count / LIMIT) || 1;

      return { items, total };
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const postContactThunk = createAsyncThunk(
  "contacts/postNew",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_URL, {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        method: "POST",
      });
      const result = await response.json();

      return result;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
