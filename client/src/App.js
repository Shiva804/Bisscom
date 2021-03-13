import React, { Component } from "react";
import runOnStart from "./components/main";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Signup from "./components/signup";

import aboutImage from "./img/Mitigate-COVID-19-Health-Risks-at-the-Check-out-1140x784.png";

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount = () => {
    runOnStart();
  };

  render() {
    return (
      <div>
        <Header />
        <section id="hero">
          <div className="hero-container">
            <h1>Welcome to Bisscom</h1>
            <h2>Bisscom for your community</h2>
            <a href="#login" className="btn-get-started scrollto">
              Login
            </a>
          </div>
        </section>

        <main id="main"></main>

        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2 style={{ color: "white" }}>About Us</h2>
            </div>

            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2">
                <img src={aboutImage} className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1">
                <h3>
                  Welcome to Bisscom, here at Bisscom we believe in creating an
                  egalitarian business societies and communities..
                </h3>
                <p className="font-italic">
                  Every commodity has a supply chain and every supply chain has
                  a retailer. We believe in empowering these retailers by
                  letting them form a informal community/consortium. Here every
                  commodity seller will be paired with their counterparts of the
                  same area, to form a community.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check2-circle"></i> You can be a pioneer
                    of your community and be a brand ambassador of Bisscom.
                  </li>
                  <li>
                    <i className="bi bi-check2-circle"></i> This consortium is
                    majorly based on trust we believe the retailers who enroll
                    on our platform and we assume every person enrolling on our
                    platform is purely intending for a mutual growth and mutual
                    benefit
                  </li>
                  <li>
                    <i className="bi bi-check2-circle"></i> Every retailer will
                    develop a mutual trust among each other for sharing their
                    retail details and will help them develop a market sense of
                    actual sales.
                  </li>
                </ul>
                <p>
                  This realtime consortium will let you connect with your peer
                  and make your community stronger and better.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Services</h2>
              <p>
                Bisscom is ready to go,easy to use and offer great value to
                businesses of all sizes without the cost and complexity of a
                legacy software.Our services live up to this promise and are
                backed by our professional expertise.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon">
                  <i className="bi bi-cpu"></i>
                </div>
                <h4 className="title">
                  <a href="">Sales Report Generation</a>
                </h4>
                <p className="description">
                  Information retrieved from the community members or an
                  individual is represented in layman understandable form.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon">
                  <i className="bi bi-clipboard-data"></i>
                </div>
                <h4 className="title">
                  <a href="">Sales Report Comparison</a>
                </h4>
                <p className="description">
                  Sales report of preceded and current information is compared
                  among the individual's data or among the community and
                  represented for future reference.{" "}
                </p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon">
                  <i className="bi bi-globe"></i>
                </div>
                <h4 className="title">
                  <a href="">Community Network</a>
                </h4>
                <p className="description">
                  A comm-room that brings all members of a community together
                </p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon">
                  <i className="bi bi-images"></i>
                </div>
                <h4 className="title">
                  <a href="">.Peer to peer Communication</a>
                </h4>
                <p className="description">
                  {" "}
                  Members among the community have access to personal chat and
                  engage for betterment.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon">
                  <i className="bi bi-sliders"></i>
                </div>
                <h4 className="title">
                  <a href="">Premium Membership</a>
                </h4>
                <p className="description">
                  A premium account has accessibility to join community beyond
                  the locality.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon">
                  <i className="bi bi-building"></i>
                </div>
                <h4 className="title">
                  <a href="">Incentives based on performance</a>
                </h4>
                <p className="description">
                  Frequent incentives or bonus based on success rate of a
                  retailer bringing in new users and sharing sales data
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="call-to-action">
          <div className="container">
            <div className="text-center">
              <h3>Call To Action</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <a className="cta-btn" href="#">
                Call To Action
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Contact Us</h2>
              <p>
                We care for our customers and every community are our company
                ambassadors and we want all of them to be connected to us 24/7.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="contact-about">
                  <h3>Bisscom</h3>
                  <p>
                    Our firm is based in India and we have aspirations for
                    making it a global app.Your trust is our benefit.
                  </p>
                  <div className="social-links">
                    <a href="#" className="twitter">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="facebook">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="instagram">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="info">
                  <div>
                    <i className="bi bi-geo-alt"></i>
                    <p>
                      52, North Street, Mylapore
                      <br />
                      Chennai - 600028
                    </p>
                  </div>

                  <div>
                    <i className="bi bi-envelope"></i>
                    <p>bisscom28@gmail.com</p>
                  </div>

                  <div>
                    <i className="bi bi-phone"></i>
                    <p>9339393939</p>
                  </div>
                </div>
              </div>
            </div>
            <section id="login" className="login_section-bg">
              <Signup />
            </section>
          </div>

          <Footer />

          <a
            href="#"
            className="back-to-top d-flex align-items-center justify-content-center"
          >
            <i className="bi bi-arrow-up-short"></i>
          </a>
        </section>
      </div>
    );
  }
}

export default App;
