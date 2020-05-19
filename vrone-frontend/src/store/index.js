import { createStore } from "redux"
import rootReducer from "../reducers/index";

// The store holds the application's state. It binds the actions, reducers, and middleware together. 

const store = createStore(rootReducer)
export default store