import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { GioHangReducer } from "./reducers/ManageCartReducer";
import { QuanLyCommentReducer } from "./reducers/ManageCommentReducer";
import { QuanLyDonHangReducer } from "./reducers/ManageOrderReducer";
import { QuanLySanPhamReducer } from "./reducers/ManageProductReducer";
import { QuanLyUserReducer } from "./reducers/ManageUserReducer";
const rootReducer = combineReducers({
  GioHangReducer,
  QuanLyCommentReducer,
  QuanLyDonHangReducer,
  QuanLySanPhamReducer,
  QuanLyUserReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunk));