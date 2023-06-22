import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
 
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async  ( _, thunkAPI) => {
    try {
      console.log('data')
      const response = await axios.get(
        '/contacts'
      );
      console.log(response.data)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  });

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (name, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", name);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

 export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);