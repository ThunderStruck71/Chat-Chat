import rootReducer from "../reducers";
import { createStore } from "redux";

export const store = createStore(rootReducer);

export type Dispatch = typeof store.dispatch;