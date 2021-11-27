import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { handelChangeFilter } from "./contacts-action";
import {
  fatchContact,
  addContact,
  deleteContact,
} from "./contacts-operations.js";

const items = createReducer([], {
  [fatchContact.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [handelChangeFilter]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [fatchContact.pending]: () => true,
  [fatchContact.fulfilled]: () => false,
  [fatchContact.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
