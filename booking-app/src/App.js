import React from 'react';
import Booking from './components/Booking';
import ContactPage from './components/ContactPage';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route,} from 'react-router-dom';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';


// const Home = () => (
//   <div>
//     <h2>Home</h2>
//     <h3>Kors i krösamoset</h3>
//   </div>
// )

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
      <Footer />

      </div>
      
  </Router>
  
);

export default BasicExample;
