import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { GlobalStyle } from 'components/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Toaster } from 'react-hot-toast';
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import ReactModal from 'react-modal';

 ReactModal.setAppElement('#root');


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter basename="/ReadJourney">
      <ThemeProvider theme={theme}>
        <App />
          <GlobalStyle />
            <Toaster position="top-right" reverseOrder={false} />
      </ThemeProvider>
        </BrowserRouter>
        </PersistGate>
      </Provider>
  </React.StrictMode>
);
