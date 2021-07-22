import { applyMiddleware, combineReducers, createStore } from "redux";
import { reposReducer } from "./reposReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { playerReducer } from "./playerReducer";
// console.log(playerReducer);
const rootReducer = combineReducers({
  repos: reposReducer,
  players: playerReducer,
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))