import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Search from './search';
import StarRating from './StarRating.js';
import Signup from './component/Signup';
import Signin from './component/Signin';
import Teachers from './component/Teachers';
import Matieres from './component/Matieres';
import ContactUs from './component/ContactUs';
import StudentReview from './component/StudentReview';
class App extends React.Component
{
  
  render()
  {
    
   
    return (
      <div>
       
        <section class="preloader">
            <div class="spinner">
                <span class="spinner-rotate"></span>
                
            </div>
        </section>
      
        <section class="navbar custom-navbar navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                      <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                          <span class="icon icon-bar"></span>
                          <span class="icon icon-bar"></span>
                          <span class="icon icon-bar"></span>
                      </button>
                    
                      <a href="#" class="navbar-brand">  <img src="http://www.issatso.rnu.tn/fo/images/logo.png" alt="logo" width="80" ></img>    </a>
                </div>
                
                <div class="collapse navbar-collapse">
                      <ul class="nav navbar-nav navbar-nav-first">
                          <li><a href="#top" class="smoothScroll">Home</a></li>
                          <li><a href="#team" class="smoothScroll">Our Teachers</a></li>
                          <li><a href="#courses" class="smoothScroll">Courses</a></li>
                          <li><a href="#contact" class="smoothScroll">Contact</a></li>  
                          <li><a href="#testimonial" class="smoothScroll">Reviews</a></li>                        
                          <li><a href="#login"><i class="smoothScroll"></i> Login</a></li>
                      </ul>
                
                      <div class="search bar">
                        
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Search />
                           
                      
                           </div>

                   
                      
                </div>
            </div>
        </section>
      
        <section id="home">
            <div class="row">
                      <div class="owl-carousel owl-theme home-slider">
                          <div class="item item-first">
                                <div class="caption">
                                    <div class="container">
                                          <div class="col-md-6 col-sm-12">
                                              <h1>Distance Learning Education </h1>
                                              <h3>Our online courses are designed to help students in their subjects with latest technologies.</h3>
                                              <a href="#feature" class="section-btn btn btn-default smoothScroll">Discover more</a>
                                          </div>
                                    </div>
                                </div>
                          </div>
                          <div class="item item-second">
                                <div class="caption">
                                    <div class="container">
                                          <div class="col-md-6 col-sm-12">
                                              <h1>Start your journey with our practical courses</h1>
                                              <h3>Our courses are built in partnership with your teachers and are designed to facilitate your .</h3>
                                              <a href="#courses" class="section-btn btn btn-default smoothScroll">Take a course</a>
                                          </div>
                                    </div>
                                </div>
                          </div>
                          <div class="item item-third">
                                <div class="caption">
                                    <div class="container">
                                          <div class="col-md-6 col-sm-12">
                                              <h1>Talk with us!</h1>
                                              <h3> Don't hesitate to ask an'y question at any time, we are here to help you. </h3>
                                              <a href="#contact" class="section-btn btn btn-default smoothScroll">Let's chat</a>
                                          </div>
                                    </div>
                                </div>
                          </div>
                      </div>
            </div>
        </section>
        
      
     
        <section id="login">
            <div class="container">
                <div class="row">
                      <div class="col-md-6 col-sm-12">
                      
<Signin />                          
                      </div>
                      <Signup /> 
                      
                </div>
            </div>
        </section>
        <Teachers />
        
        <Matieres />
        
       <StudentReview />
       
      
        <ContactUs/>   
      
        <footer id="footer">
            <div class="container">
                <div class="row">
                      <div class="col-md-4 col-sm-6">
                          <div class="footer-info">
                           
                              
                                <ul class="social-icon">
                                    <li><a href="https://www.facebook.com/IssatSo" class="fa fa-facebook-square" attr="facebook icon"></a></li>
                                    <li><a href="#" class="fa fa-twitter"></a></li>
                                    <li><a href="#" class="fa fa-instagram"></a></li>
                                    <li><a href="#" class="fa fa-youtube"></a></li>
                                </ul>
                                <div class="copyright-text"> 
                                    <p>Copyright &copy; 2022  Institut Supérieur des Sciences Appliquées et de Technologie de Sousse</p>
                                    
                                    <p>Design: Akram Mourali</p>

                                </div>
                                
                          </div>
                           <div class="localisation"> 
                            <a href="#"   class="fa fa-map-marker" aria-hidden="true"> &nbsp;&nbsp;ISSAT Sousse Cité Taffala (Ibn Khaldoun) 4003 <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sousse Tunisie</a>
                                </div>
                      </div>
                      
                      <div class="col-md-4 col-sm-6">
                          <div class="footer-info">
                                <div class="section-title">
                                    <h2>Contact Info</h2>
                                </div>
                                <address>
                                <div class="social-icon">
                                <p>  <a href="#" class="fa fa-phone"> +216 73 382 656</a></p>
                                <p>  <a href="#" class="fa fa-fax"> +216 73 382 658</a></p>
                                </div>
                                    <p> <a href = "mailto: issatso@issatso.rnu.tn"class="fa fa-envelope">  issatso@issatso.rnu.tn</a></p>
                                </address>
                                <div class="footer_menu">
                                    <h2>Quick Links</h2>
                                    <ul>
                                          <li><a href="http://www.issatso.rnu.tn/fo/presentation/historique.php">A propos de l'ISSAT</a></li><br></br>
                                          <li><a href="http://www.mes.tn/">Ministère Ens. Sup. Rech. Sc.</a></li> <br></br>
                                          <li><a href="https://www4.inscription.tn/">Inscription.tn</a></li>
                                    </ul>
                                </div>
                          </div>
                      </div>
                      <div class="col-md-4 col-sm-12">
                          <div class="footer-info newsletter-form">
                                <div class="section-title">
                                    <h2>Newsletter Signup</h2>
                                </div>
                                <div>
                                    <div class="form-group">
                                          <form action="#" method="get">
                                              <input type="email" class="form-control" placeholder="Enter your email" name="email" id="email" required="" />
                                              <input type="submit" class="form-control" name="submit" id="form-submit" value="Send me" />
                                          </form>
                                          <span><sup>*</sup> Please note - we do not spam your email.</span>
                                    </div>
                                </div>
                          </div>
                      </div>
                      
                </div>
            </div>
        </footer>
  </div>
) } }
 export default App;
 