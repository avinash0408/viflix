import React,{useState,useEffect} from 'react'
import axios from "../axios";
import YouTube from 'react-youtube';
import requests from "../request";
import './Banner.css';
import movieTrailer from 'movie-trailer';
import Search from './Search';

function Banner() {
    const [movie,setMovie]=useState([]);
    const [Search_mv,setSearch_mv]=useState([]);
    const [inputValue, setInputValue] = React.useState("");
    const search_li={
        id:0,
        title:"Some",
        Year:"2012"
    };
    useEffect(() => {
        async function fetchData(){
            const request=await axios.get(requests.fetchTopRated);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length-1)]
            );
            return request;
        }fetchData();
    }, [requests.fetchTopRated]);

    function truncate(str,n){
        return str?.length >n ? str.substr(0,n-1)+"...":str;
    }
    function searchChangeHandler(event){
        setInputValue(event.target.value);
        console.log(inputValue);
    }
  
    return (
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}
        >
          
            <div className="banner__content">
                <input id="search_mv" value={inputValue} onChange={searchChangeHandler} placeholder="Search here.."/>
                {/* <Search search_in={document.getElementById('search_mv').value}/> */}
                <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
                </h1>
            <div className="banner__buttons">
             {/* <button onClick={()=> handleClick(movie)} className="banner__button">Play</button>
             <button className="banner__button">My List</button> */}
            </div>
            
    <h1 className="banner__description">{truncate(movie?.overview,150)}</h1>
            </div>
            <div className="banner__fadeBottom">
            </div>
            
        </header>
    )
}

export default Banner
