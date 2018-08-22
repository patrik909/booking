import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import {Button} from 'reactstrap';
// import Jumbotron from './HomeJumbotron';

import TestImage from './../images/test.jpg';

class Home extends Component {
  render() {
    return (
      <div className="wrapper home-wrapper">
        <div className="reservation-wrapper">
          <div className="jumbotron  jumbotron-fluid home-jumbo">
            <div className="container container-jumbo">
              <h1 className="display-4">Le'licious </h1>
              <p className="lead">Your heaven for tasty food</p>

              <p className="lead">
                <Link to="/Reservation">
                  <button type="button" className="btn btn-primary btn-lg">
                    Book a table
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <main>
          {/* card section */}
          <div className="card-group">
            <div className="card">
              <img
                className="card-img-top"
                src={TestImage}
                alt="Card image cap"
              />
              <div className="card-img-overlay">
                <h2 className="card-title">Lovely atmosphere</h2>
              </div>
            </div>

            <div className="card">
              <img
                className="card-img-top"
                src={TestImage}
                alt="Card image cap"
              />
              <div className="card-img-overlay">
                <h2 className="card-title">Heavenly food</h2>
              </div>
            </div>

            <div className="card">
              <img
                className="card-img-top"
                src={TestImage}
                alt="Card image cap"
              />
              <div className="card-img-overlay">
                <h2 className="card-title">Lovely drinks</h2>
              </div>
            </div>
          </div>
          {/* <div className="card bg-dark text-white">
            <img className="card-img" src={TestImage} alt="Card" />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">Last updated 3 mins ago</p>
            </div>
          </div>

          <div className="card bg-dark text-white">
            <img className="card-img" src={TestImage} alt="Card" />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">Last updated 3 mins ago</p>
            </div>
          </div>

          <div className="card bg-dark text-white">
            <img className="card-img" src={TestImage} alt="Card" />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">Last updated 3 mins ago</p>
            </div>
          </div> */}
        </main>
      </div>
    );
  }
}

export default Home;
