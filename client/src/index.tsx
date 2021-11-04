import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Container } from 'react-bootstrap'
import {
  ApolloProvider,
} from "@apollo/client";

import 'bootstrap/dist/css/bootstrap.min.css';
import { apolloClient } from './utils/apolloClient'
import { AppRouter } from './containers/Router.container'
import { AppNavbar } from './components/Navbar.component'

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <AppNavbar />
    <Container>
      <AppRouter />
    </Container>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
