import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Container } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import {
  ApolloProvider,
} from "@apollo/client";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { apolloClient } from './utils/apolloClient'
import { AppRouter } from './containers/Router.container'
import { AppNavbar } from './components/Navbar.component'

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <AppNavbar />
    <ToastContainer 
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <Container style={{ padding: '50px' }}>
      <AppRouter />
    </Container>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
