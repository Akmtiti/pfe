import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Search from './search';
import StarRating from './StarRating.js';
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
                      <div class="col-md-offset-1 col-md-4 col-sm-12">
                          <div class="entry-form">
                               
                                    <h2>SIGN IN  </h2>
                                    <input type="email" name="email" class="form-control" placeholder="Your email address" required="" />
                                    <input type="password" name="password" class="form-control" placeholder="Your password" required="" />
                                    <button class="submit-btn form-control" id="form-submit">Login</button>
                                    <Button variant="link">Forget password</Button>
                                    

                                    
                             
                          </div>
                      </div>
                          
                      </div>
                      <div class="col-md-offset-1 col-md-4 col-sm-12">
                          <div class="entry-form">
                               
                                    <h2>SIGN UP</h2>
                                    <input type="text" name="full name" class="form-control" placeholder="Full name" required="" />
                                    <input type="email" name="email" class="form-control" placeholder="Your email address" required="" />
                                    <input type="password" name="password" class="form-control" placeholder="Password" required="" />
                                    <input type="password" name="password" class="form-control" placeholder="Confirm password" required="" />
                                    <button class="submit-btn form-control" id="form-submit">Get started</button>
                                    
                             
                          </div>
                      </div>
                </div>
            </div>
        </section>
        <section id="team">
            <div class="container">
                <div class="row">
                      <div class="col-md-12 col-sm-12">
                          <div class="section-title">
                                <h2>Teachers <small>Meet Professional Trainers</small></h2>
                                
                  <Button variant="link">Voir plus</Button>


                          </div>
         
                      
                      <div className="owl-carousel owl-theme owl-courses">

                      <div class="col-md-8 col-sm-7">
                          <div class="team-thumb">
                                <div class="team-image">
                                    <img src="assets/images/inconnue.jpg" class="img-responsive" alt="" />
                                </div>
                                <div class="team-info">
                                    <h4>S</h4>
                                    <span>I love Teaching</span>
                                </div>
                                <ul class="social-icon">
                                    <li><a href="#" class="fa fa-facebook-square" attr="facebook icon"></a></li>
                                    <li><a href="#" class="fa fa-twitter"></a></li>
                                    <li><a href="#" class="fa fa-instagram"></a></li>
                                </ul>
                          </div>
                      </div>
                      <div class="col-md-8 col-sm-7">
                          <div class="team-thumb">
                                <div class="team-image">
                                    <img src="assets/images/inconnue.jpg" class="img-responsive" alt="" />
                                </div>
                                <div class="team-info">
                                    <h4>x</h4>
                                    <span>Education is the key!</span>
                                </div>
                                <ul class="social-icon">
                                    <li><a href="#" class="fa fa-google"></a></li>
                                    <li><a href="#" class="fa fa-instagram"></a></li>
                                </ul>
                          </div>
                      </div>
                      <div class="col-md-8 col-sm-4">
                          <div class="team-thumb">
                                <div class="team-image">
                                    <img src="assets/images/inconnue.jpg" class="img-responsive" alt="" />
                                </div>
                                <div class="team-info">
                                    <h4>T</h4>
                                    <span>Education is the key!</span>
                                </div>
                                <ul class="social-icon">
                                    <li><a href="#" class="fa fa-google"></a></li>
                                    <li><a href="#" class="fa fa-instagram"></a></li>
                                </ul>
                          </div>
                      </div>
                      <div class="col-md-8 col-sm-7">
                          <div class="team-thumb">
                                <div class="team-image">
                                    <img src="assets/images/inconnue.jpg" class="img-responsive" alt="" />
                                </div>
                                <div class="team-info">
                                    <h4>y</h4>
                                    <span>I like Online Courses</span>
                                </div>
                                <ul class="social-icon">
                                    <li><a href="#" class="fa fa-twitter"></a></li>
                                    <li><a href="#" class="fa fa-envelope-o"></a></li>
                                    <li><a href="#" class="fa fa-linkedin"></a></li>
                                </ul>
                          </div>
                      </div>
                      <div class="col-md-8 col-sm-7">
                          <div class="team-thumb">
                                <div class="team-image">
                                    <img src="assets/images/inconnue.jpg" class="img-responsive" alt="" />
                                </div>
                                <div class="team-info">
                                    <h4>z</h4>
                                    <span>Education is the key!</span>
                                </div>
                                <ul class="social-icon">
                                    <li><a href="#" class="fa fa-twitter"></a></li>
                                    <li><a href="#" class="fa fa-envelope-o"></a></li>
                                    <li><a href="#" class="fa fa-linkedin"></a></li>
                                </ul>
                          </div>
                      </div>
                      <div class="col-md-8 col-sm-7">
                          <div class="team-thumb">
                                <div class="team-image">
                                    <img src="assets/images/inconnue.jpg" class="img-responsive" alt="" />
                                </div>
                                <div class="team-info">
                                    <h3>p</h3>
                                    <span>Learning is fun</span>
                                </div>
                                <ul class="social-icon">
                                    <li><a href="#" class="fa fa-twitter"></a></li>
                                    <li><a href="#" class="fa fa-google"></a></li>
                                    <li><a href="#" class="fa fa-behance"></a></li>
                                </ul>
                          </div>
                      </div>
                </div>
            </div>
            </div>
            </div>
        </section>
        
        <section id="courses">
            <div class="container">
                <div class="row">
                      <div class="col-md-12 col-sm-12">
                          <div class="section-title">
                                <h2>Popular Courses <small>Upgrade your skills with newest courses</small></h2>
                                <Button variant="link">Voir plus</Button>

                          </div>
                          <div className="owl-carousel owl-theme owl-courses">
                                <div class="col-md-4 col-sm-4">
                                    <div class="item">
                                          <div class="courses-thumb">
                                              <div class="courses-top">
                                                    <div class="courses-image">
                                                        <img src="assets/images/iotarch.png" width="200" height="210" alt="" />
                                                    </div>
                                               
                                              </div>
                                              <div class="courses-detail">
                                                    <h3><a href="#">Architecture IOT</a></h3>
                                                    <p>LISI-A03</p>
                                              </div>
                                              <div class="courses-info">
                                                    <div class="courses-author">
                                                        <img src="assets/images/inconnue.jpg" class="img-responsive" alt="" />
                                                        <span>Salwa</span>
                                                    </div>
                                                   
                                              </div>
                                          </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <div class="item">
                                          <div class="courses-thumb">
                                              <div class="courses-top">
                                                    <div class="courses-image">
                                                        <img src="assets/images/mecan.jpg" width="200" height="210" alt="" />
                                                    </div>
                                                 
                                              </div>
                                              <div class="courses-detail">
                                                    <h3><a href="#">Mecanique</a></h3>
                                                    <p>LGM-A01</p>
                                              </div>
                                              <div class="courses-info">
                                                    <div class="courses-author">
                                                        <img src="assets/images/inconnue.jpg" class="img-responsive" alt="" />
                                                        <span>Omar</span>
                                                    </div>
                                                   
                                              </div>
                                          </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <div class="item">
                                          <div class="courses-thumb">
                                              <div class="courses-top">
                                                    <div class="courses-image">
                                                        <img src="assets/images/deeplr.jpg" width="200" height="210" alt="" />
                                                    </div>
                                                  
                                              </div>
                                              <div class="courses-detail">
                                                    <h3><a href="#">Deep learning</a></h3>
                                                    <p>LISI-A03</p>
                                              </div>
                                              <div class="courses-info">
                                                    <div class="courses-author">
                                                        <img src="assets/images/inconnue.jpg" class="img-responsive" alt="" />
                                                        <span>tarek</span>
                                                    </div>
                                                  
                                              </div>
                                          </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <div class="item">
                                          <div class="courses-thumb">
                                              <div class="courses-top">
                                                    <div class="courses-image">
                                                        <img src="assets/images/algbr.png" width="200" height="210"  alt="" />
                                                    </div>
                                                   
                                              </div>
                                              <div class="courses-detail">
                                                    <h3><a href="#">Algebre 3</a></h3>
                                                    <p>LGC-A01</p>
                                              </div>
                                              <div class="courses-info">
                                                    <div class="courses-author">
                                                        <img src="assets/images/inconnue.jpg" class="img-responsive" alt="" />
                                                        <span>neyla</span>
                                                    </div>
                                                   
                                              </div>
                                          </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <div class="item">
                                          <div class="courses-thumb">
                                              <div class="courses-top">
                                                    <div class="courses-image">
                                                        <img src="assets/images/Electromagnétisme.png" width="200" height="210" alt="" />
                                                    </div>
                                              
                                              </div>
                                              <div class="courses-detail">
                                                    <h3><a href="#">Electromagnétisme</a></h3>
                                                    <p>Prep-A1</p>
                                              </div>
                                              <div class="courses-info">
                                                    <div class="courses-author">
                                                        <img src="assets/images/inconnue.jpg" class="img-responsive" alt="" />
                                                        <span>sami</span>
                                                    </div>
                                                  
                                              </div>
                                          </div>
                                    </div>
                                </div>
                          </div>
                      </div>
                </div>
            </div>
        </section>
        
        <section id="testimonial">
            <div class="container">
                <div class="row">
                      <div class="col-md-12 col-sm-12">
                          <div class="section-title">
                                <h2>Student Reviews <small>from around the world</small></h2>
                          </div>
                          <div class="owl-carousel owl-theme owl-client">
                                <div class="col-md-4 col-sm-4">
                                    <div class="item">
                                          <div class="tst-image">
                                              <img src="assets/images/inconnue.jpg" class="img-responsive" alt="" />
                                          </div>
                                          <div class="tst-author">
                                              <h4>Nour</h4>
                                          </div>
                                          <div class="tst-rating">
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                          </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <div class="item">
                                          <div class="tst-image">
                                              <img src="assets/images/inconnue.jpg" class="img-responsive" alt="" />
                                          </div>
                                          <div class="tst-author">
                                              <h4>Sami</h4>
                                          </div>
                                          <div class="tst-rating">
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                          </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <div class="item">
                                          <div class="tst-image">
                                              <img src="assets/images/inconnue.jpg" class="img-responsive" alt="" />
                                          </div>
                                          <div class="tst-author">
                                              <h4>Salim</h4>
                                          </div>
                                          <div class="tst-rating">
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                          </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <div class="item">
                                          <div class="tst-image">
                                              <img src="assets/images/inconnue.jpg" class="img-responsive" alt="" />
                                          </div>
                                          <div class="tst-author">
                                              <h4>Chedli</h4>
                                          </div>
                                          <div class="tst-rating">
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                          </div>
                                    </div>
                                </div>
                          </div>
                      </div>
                  </div>
            </div>
        </section> 
       
      
        <section id="contact">
            <div class="container">
                <div class="row">
                      <div class="col-md-6 col-sm-12">
                          <form id="contact-form" role="form">
                                <div class="section-title">
                                           <h2>Contact us <small>we love conversations. let us talk!</small></h2>
                                  </div>
                                  <div class="col-md-12 col-sm-12">
                                    <input type="text" class="form-control" placeholder="Enter full name" name="name" required="" />
                      
                                    <input type="email" class="form-control" placeholder="Enter email address" name="email" required="" />
                                    <textarea class="form-control" rows="6" placeholder="Tell us about your message" name="message" required=""></textarea>
                               
                               
                                   </div>
                                    <div className="App">
                                    <StarRating/>
                                </div>
                                <div class="col-md-4 col-sm-12">
                                    <input type="button" class="form-control" name="send message" value="Send Message" />
                                </div>
                              
                          </form>
                      </div>
                      
                      <div class="col-md-6 col-sm-12">
                          <div class="contact-image">
                                <img src="assets/images/contact-image.jpg" class="img-responsive" alt="Smiling Two Girls" />
                          </div>
                      </div>
                </div>
            </div>
         
        </section>       
      
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
 