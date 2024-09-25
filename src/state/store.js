import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), 
});

export default store;