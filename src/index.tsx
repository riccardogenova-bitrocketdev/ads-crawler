/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './redux-modules/configureStore';
import { messages } from './i18n';
import { DEFAULT_LOCALE } from './constants/general';
import { actionLoadPrevState } from './redux-modules/actions';
// import { initializeFirebase } from './config/firebase';
// const firebase = initializeFirebase();
import './theme/bootstrap-reboot.css';

const lastUpdate = localStorage.getItem('lastUpdate');
const adsDownloaded = localStorage.getItem('adsDownloaded') || '';
const fileDownloaded = localStorage.getItem('fileDownloaded') || '';

const store = configureStore();

if (lastUpdate || adsDownloaded || fileDownloaded) {
  store.dispatch(
    actionLoadPrevState({
      from: parseInt(adsDownloaded),
      lastUpdate: lastUpdate ? JSON.parse(lastUpdate) : [],
      adsDownloaded: parseInt(adsDownloaded),
      fileDownloaded: parseInt(fileDownloaded),
    }),
  );
}

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={DEFAULT_LOCALE} messages={messages[DEFAULT_LOCALE]}>
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
