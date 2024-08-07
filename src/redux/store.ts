import { employeeApi } from "@/api/crud";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import appReducer from "./appSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    [employeeApi.reducerPath]: employeeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeeApi.middleware),
});
setupListeners(store.dispatch);
export default store;
