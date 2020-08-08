import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global'

import store from './store';

import Home from './components/Home';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>

        <Home />
      </Provider>
    </>

  );
}


export default App;
