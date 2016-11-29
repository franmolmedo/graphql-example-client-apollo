import { combineReducers } from 'redux';

import client  from './client';

const reducers = combineReducers({
  root : client.reducer()
});

export default reducers;
