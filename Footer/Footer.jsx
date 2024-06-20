import React from "react";
import { assets } from "../../assets/assets";
import './Footer.css';
const Footer=()=>{
    return (
      
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt=""/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro minus eligendi autem alias consequatur unde, architecto reprehenderit vero asperiores culpa, veritatis quo fugit eos sequi adipisci magnam iure cupiditate doloremque?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={ assets.linkedin_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
<h2>COMPANY</h2>
<ul>
    <li>Home</li>
    <li>Delivery</li>
    <li>Privacy-Security</li>
    <li>About Us</li>
</ul>
                </div>
                <div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+1-212-342- 5679</li>
    <li>contact@tomato.com</li>
    {/* <li>+1 908-456-3453</li> */}
</ul>
                </div>
            </div>
            <hr/>
          
            <p className="footer-copyright">Copyright 2024 @ Tomato.com-All Rights Reserverd.</p>
        </div>


    );
}
export default Footer;