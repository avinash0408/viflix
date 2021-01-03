import React,{useState,useEffect} from 'react'
import axios from "../axios";
import YouTube from 'react-youtube';
import requests from "../request";
import './Banner.css';
import movieTrailer from 'movie-trailer';

function Banner() {
    const [movie,setMovie]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");
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
    const opts={
        height: "390",
        width: "100%",
        // playerVars:{
        //     autoplay :1,
        // },
    }
    const handleClick = (movie) => {
        console.log("hey");
        if(trailerUrl){
            setTrailerUrl('');
        }
        else{
            movieTrailer(movie?.name||movie?.title||movie?.original_name||"")
            .then((url) => {
                const urlParams=new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch((error)=>console.log(error));
        }
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
