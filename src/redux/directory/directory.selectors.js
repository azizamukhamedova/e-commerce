import { createSelector } from "reselect";
import { selectCartItems } from "../cart/cart.selector";
import directoryReducer from "./directory.reducer";

const selectDirectory = (state) => state.directory;

export const selectDirectorySessions = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
