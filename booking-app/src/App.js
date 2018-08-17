import React from 'react';
import Booking from './components/Booking';
import ContactPage from './components/ContactPage';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
    <h3>Kors i krösamoset</h3>
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
