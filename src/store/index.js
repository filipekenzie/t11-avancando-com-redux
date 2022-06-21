import { legacy_createStore as createStore, combineReducers } from "redux";

import productsReducer from "./modules/products/reducer";
import cartReducer from "./modules/cart/reducer";
import bananaReducer from "./modules/banana/reducer";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  banana: bananaReducer,
});

const store = createStore(reducers);

export default store;
