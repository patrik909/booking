import React, { Component } from 'react';
import TestImage from './../images/test.jpg';

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="jumbotron">
          <header className="home-header">
            <h1 className="App-title">Le'licious</h1>
            <h2>Your heaven for tasty food</h2>
            <button type="button" className="btn btn-light">
              Book a table
            </button>
          </header>
        </div>
        <main>
          <div className="content">
            <div class="card bg-dark text-white">
              <img class="card-img" src={TestImage} alt="Card" />
              <div class="card-img-overlay">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">Last updated 3 mins ago</p>
              </div>
            </div>

            <div class="card bg-dark text-white">
              <img class="card-img" src={TestImage} alt="Card" />
              <div class="card-img-overlay">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">Last updated 3 mins ago</p>
              </div>
            </div>

            <div class="card bg-dark text-white">
              <img class="card-img" src={TestImage} alt="Card" />
              <div class="card-img-overlay">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
