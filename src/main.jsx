import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import './index.css'
import { store } from './Redux/Store.js';
import { ApolloProvider } from '@apollo/client';
import client from "./apolloClient.js"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        <ApolloProvider client={client}>
        <App />
        </ApolloProvider>
      </Provider>
    </StrictMode>
  </BrowserRouter>
)
