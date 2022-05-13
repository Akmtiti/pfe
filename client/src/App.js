import React, { useEffect, useState } from "react"
import "./App.css"
import Button from "react-bootstrap/Button"
import Search from "./search"
import StarRating from "./StarRating.js"
import Signup from "./component/Singup"
import Login from "./component/Login"
import Teachers from "./component/Teachers"
import Courses from "./component/Courses"
import ContactUs from "./component/ContactUs"
import StudentReview from "./component/StudentReview"


function App() {
  const [connectedUser, setConnectedUser] = useState("")

  return (
    <div>
      <section className="preloader">
        <div className="spinner">
          <span className="spinner-rotate"></span>
        </div>
      </section>

      <section
        className="navbar custom-navbar navbar-fixed-top"
        role="navigation"
      >
        <div className="container">
          <div className="navbar-header">
            <button
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
            </button>

            <a href="#" className="navbar-brand">
              {" "}
              <img
                src="http://www.issatso.rnu.tn/fo/images/logo.png"
                alt="logo"
                width="80"
              ></img>{" "}
            </a>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-nav-first">
              <li>
                <a href="#top" className="smoothScroll">
                  Home
                </a>
              </li>
              <li>
                <a href="#team" className="smoothScroll">
                  Our Teachers
                </a>
              </li>
              <li>
                <a href="#courses" className="smoothScroll">
                  Courses
                </a>
              </li>
              <li>
                <a href="#contact" className="smoothScroll">
                  Contact
                </a>
              </li>
              <li>
                <a href="#testimonial" className="smoothScroll">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#login">
                  <i className="smoothScroll"></i> Login
                </a>
              </li>
            </ul>

            <div className="search bar">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Search />
            </div>
            {connectedUser && (
              <div style={{ whiteSpace: "nowrap" }}>
                Utilisateur connecté : {connectedUser}{" "}
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="home">
        <div className="row">
          <div className="owl-carousel owl-theme home-slider">
            <div className="item item-first">
              <div className="caption">
                <div className="container">
                  <div className="col-md-6 col-sm-12">
                    <h1>Distance Learning Education </h1>
                    <h3>
                      Our online courses are designed to help students in their
                      subjects with latest technologies.
                    </h3>
                    <a
                      href="#feature"
                      className="section-btn btn btn-default smoothScroll"
                    >
                      Discover more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item item-second">
              <div className="caption">
                <div className="container">
                  <div className="col-md-6 col-sm-12">
                    <h1>Start your journey with our practical courses</h1>
                    <h3>
                      Our courses are built in partnership with your teachers
                      and are designed to facilitate your .
                    </h3>
                    <a
                      href="#courses"
                      className="section-btn btn btn-default smoothScroll"
                    >
                      Take a course
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item item-third">
              <div className="caption">
                <div className="container">
                  <div className="col-md-6 col-sm-12">
                    <h1>Talk with us!</h1>
                    <h3>
                      {" "}
                      Don't hesitate to ask an'y question at any time, we are
                      here to help you.{" "}
                    </h3>
                    <a
                      href="#contact"
                      className="section-btn btn btn-default smoothScroll"
                    >
                      Let's chat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="login">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Login setConnectedUser={setConnectedUser} />
            </div>
            <Signup />
          </div>
        </div>
      </section>
      <Teachers />

      <Courses />

      <StudentReview />

      <ContactUs />

      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="footer-info">
                <ul className="social-icon">
                  <li>
                    <a
                      href="https://www.facebook.com/IssatSo"
                      className="fa fa-facebook-square"
                      attr="facebook icon"
                    ></a>
                  </li>
                  <li>
                    <a href="#" className="fa fa-twitter"></a>
                  </li>
                  <li>
                    <a href="#" className="fa fa-instagram"></a>
                  </li>
                  <li>
                    <a href="#" className="fa fa-youtube"></a>
                  </li>
                </ul>
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2022 Institut Supérieur des Sciences
                    Appliquées et de Technologie de Sousse
                  </p>

                  <p>Design: Akram Mourali</p>
                </div>
              </div>
              <div className="localisation">
                <a href="#" className="fa fa-map-marker" aria-hidden="true">
                  {" "}
                  &nbsp;&nbsp;ISSAT Sousse Cité Taffala (Ibn Khaldoun) 4003{" "}
                  <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sousse Tunisie
                </a>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="footer-info">
                <div className="section-title">
                  <h2>Contact Info</h2>
                </div>
                <address>
                  <div className="social-icon">
                    <p>
                      {" "}
                      <a href="#" className="fa fa-phone">
                        {" "}
                        +216 73 382 656
                      </a>
                    </p>
                    <p>
                      {" "}
                      <a href="#" className="fa fa-fax">
                        {" "}
                        +216 73 382 658
                      </a>
                    </p>
                  </div>
                  <p>
                    {" "}
                    <a
                      href="mailto: issatso@issatso.rnu.tn"
                      className="fa fa-envelope"
                    >
                      {" "}
                      issatso@issatso.rnu.tn
                    </a>
                  </p>
                </address>
                <div className="footer_menu">
                  <h2>Quick Links</h2>
                  <ul>
                    <li>
                      <a href="http://www.issatso.rnu.tn/fo/presentation/historique.php">
                        A propos de l'ISSAT
                      </a>
                    </li>
                    <br></br>
                    <li>
                      <a href="http://www.mes.tn/">
                        Ministère Ens. Sup. Rech. Sc.
                      </a>
                    </li>{" "}
                    <br></br>
                    <li>
                      <a href="https://www4.inscription.tn/">Inscription.tn</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="footer-info newsletter-form">
                <div className="section-title">
                  <h2>Newsletter Signup</h2>
                </div>
                <div>
                  <div className="form-group">
                    <form action="#" method="get">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        name="email"
                        id="email"
                        required=""
                      />
                      <input
                        type="submit"
                        className="form-control"
                        name="submit"
                        id="form-submit"
                        value="Send me"
                      />
                    </form>
                    <span>
                      <sup>*</sup> Please note - we do not spam your email.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
