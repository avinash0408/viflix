import React, { useState,useEffect } from 'react';
import './Nav.css';
import axios from '../axios';

const Nav=({data}) => {
    const [show,handleShow]=useState(false);
    const [search_mv,setMovies]=useState([]);
    const search_api="https://api.themoviedb.org/3/search/multi?api_key=f08d0b962be8c5b6f23f93a5531ccc49&query="
    const [inputValue, setInputValue] = React.useState("");
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
    function searchChangeHandler(event){
        setInputValue(event.target.value);
        data(event.target.value);
    }
   
    // function keypress(event){
    //     if(event.keyCode==13){
    //         pass_this=event.target.value;            
    //     }
    // }
    function handleOnSubmit(event){
    event.preventDefault();
    }

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
            alt="Netflix-logo"/>
    
   <input type="search" className="search" id="search_mv" value={inputValue} onChange={searchChangeHandler}  placeholder="Search here.."/>
            <img className="nav__avatar"
            src="https://t4.ftcdn.net/jpg/03/23/80/43/240_F_323804352_GEjabYYebyrfHyMLtfPPrZeh0wYsZQgf.jpg"
            alt="Netflix-logo"/>

            
        </div>
    )
}

export default Nav
