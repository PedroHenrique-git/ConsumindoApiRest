import { createStore } from "redux";
import reducers from "./modules/RootReducer";

const store = createStore(reducers);

export default store;
