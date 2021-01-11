import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './main/reducer';
// import filtersReducer from './filters/reducer';
// import cart from './cart/reducer';
// import { Operations } from './pizzas/operations';

const rootReducer = combineReducers({  
  main: mainReducer,
  // filters: filtersReducer,
  // cart
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;