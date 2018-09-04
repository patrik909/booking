import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CancellationPage from './components/CancellationPage';
import AdminPage from './components/AdminPage';
import Home from './components/Home.js';
import ContactPage from './components/ContactPage';
import ReservationPage from './components/ReservationPage.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

//styling
import '../node_modules/font-awesome/css/font-awesome.css';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Cancellation = ({ match }) => <CancellationPage match={match} />;

const Admin = () => <AdminPage />;

const Contact = () => <ContactPage />;

const Reservation = () => <ReservationPage />;

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Reservation" component={Reservation} />
      <Route path="/Admin" component={Admin} />
      <Route path="/Cancellation/:id" component={Cancellation} />
      <Footer />
    </div>
  </Router>
);

export default App;
