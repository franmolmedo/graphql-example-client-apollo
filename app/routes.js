import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { MasterContainer } from './features/master/master';
import { Detail } from './features/detail/detail';

export default (
  <Route path="/">
    <IndexRoute component= { MasterContainer }/>
    <Route path="detail" component= { Detail }/>
    <Route path="*" component= { MasterContainer }/>
  </Route>
);
