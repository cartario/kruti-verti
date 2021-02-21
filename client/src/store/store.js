import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './main/reducer';
import userReducer from './user/reducer';
import lessonsReducer from './lessons/reducer';

const rootReducer = combineReducers({  
  main: mainReducer,
  user: userReducer,
  lessons: lessonsReducer,  
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;