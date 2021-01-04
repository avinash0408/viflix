import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './Footer.css'
function Footer() {
    return (
        
             <div class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify"><i>Viflix </i> This is a simple clone of Netflix using React</p>
          </div>
          </div>
          </div>
        <hr/>
      <div class="container">
          <br/>
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
         <a href="#"> Avinash Samudrala</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="https://www.facebook.com/avinashsamudrala123456789"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="https://twitter.com/_avinash0801"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="https://www.instagram.com/_avinash_samudrala"><i class="fa fa-instagram"></i></a></li>
              <li><a class="linkedin" href="https://www.linkedin.com/in/avinash-samudrala-4583511b3/"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>


    </div>
    )
}

export default Footer
