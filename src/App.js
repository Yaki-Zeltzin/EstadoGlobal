import React from 'react';
import "../src/components/styles/styles.scss"
import AppRoutes from './AppRoutes';
import {Provider} from "react-redux"
import store from './redux/store';

const App = () => (
  <Provider store={store}>  
      <AppRoutes/>
  </Provider>
)

export default App;
