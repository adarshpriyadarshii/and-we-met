import { combineReducers } from 'redux';
import commentReducer from './commentReducer';
import replyReducer from './replyReducer';

const appReducer = combineReducers({
    comment:commentReducer,
    reply:replyReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;