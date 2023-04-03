import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import storeReducers from './redux';
import { BrowserRouter } from 'react-router-dom';
import Container from '@mui/material/Container';

const store = createStore(storeReducers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Container maxWidth="lg">
        <App/>
    </Container>
    </Provider>
  </BrowserRouter>
);


