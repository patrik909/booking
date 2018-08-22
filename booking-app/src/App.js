import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import Home from './components/Home.js';
import ContactPage from './components/ContactPage';
import ReservationPage from './components/ReservationPage.js';
// import Booking from './components/Booking';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

//styling
import '../node_modules/font-awesome/css/font-awesome.css';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//     <h3>Kors i krösamoset</h3>
//   </div>
// )

const Admin = () => <AdminPage />;

const Contact = () => <ContactPage />;

const Reservation = () => <ReservationPage />;

// const Reservation = () => (
//   <div>
//     <h2>Reservation</h2>
//     <Booking />
//   </div>
// );
const BasicExample = () => (
  <Router>
    <div>
      {/* <ul>
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

      <hr /> */}
      <Navbar />

      <Route exact path="/" component={Home} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Reservation" component={Reservation} />
      <Route path="/Admin" component={Admin} />
      <Footer />
    </div>
  </Router>
);

export default BasicExample;
