import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import '@babel/polyfill';

import Container from './components/layout/Container';

import store, { persistor } from './stores';

render(
  <Provider store={ store }>
    <PersistGate persistor={ persistor }>
      <BrowserRouter basename="/">
        <Container/>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) module.hot.accept();
