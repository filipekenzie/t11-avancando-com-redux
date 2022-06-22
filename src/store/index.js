import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import productsReducer from "./modules/products/reducer";
import cartReducer from "./modules/cart/reducer";
import bananaReducer from "./modules/banana/reducer";

import thunk from "redux-thunk";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  banana: bananaReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
