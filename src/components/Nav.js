import React, { useState,useEffect } from 'react';
import './Nav.css';

function Nav() {
    const [show,handleShow]=useState(false);
    useEffect(() =>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll",null);
        };
    },[]);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
            alt="Netflix-logo"/>

            <img className="nav__avatar"
            src="https://t4.ftcdn.net/jpg/03/23/80/43/240_F_323804352_GEjabYYebyrfHyMLtfPPrZeh0wYsZQgf.jpg"
            alt="Netflix-logo"/>

            
        </div>
    )
}

export default Nav
