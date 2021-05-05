import rootReducer from "./reducers/rootReducer";
import { createStore } from "redux";

const store = createStore(rootReducer);

export type Dispatch = typeof store.dispatch;

export default store;