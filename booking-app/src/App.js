import React from 'react';
import Booking from './components/Booking';
import ContactPage from './components/ContactPage';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
  <div className="jumbotron">
    <h1 className="display-4">Hello, world!</h1>
    <p className="lead">
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <hr className="my-4" />
    <p>
      It uses utility classes for typography and spacing to space content out
      within the larger container.
    </p>
    <button type="button" className="btn btn-light">
      Light
    </button>
  </div>
);

const Contact = () => <ContactPage />;

const Reservation = () => (
  <div>
    <h2>Reservation</h2>
    <Booking />
  </div>
);

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Reservation">Reservation</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Reservation" component={Reservation} />
    </div>
  </Router>
);

export default BasicExample;
