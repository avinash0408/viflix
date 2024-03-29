import React,{ useState,useEffect} from 'react'
import YouTube from 'react-youtube';
import axios from '../axios';
import './Row.css';
import movieTrailer from 'movie-trailer';

const imgurl="https://image.tmdb.org/t/p/original/";
function Row(props) {
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");

    useEffect(() => {
        async function fetchData(){
        const request= await axios.get(props.fetchUrl);
        setMovies(request.data.results);
        return request;
        }fetchData();
        
    }, [props.fetchUrl]);

    const opts={
        height: "390",
        width: "100%",
        playerVars:{
            autoplay :1,
        },
    }
    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('');
        }
        else{
            console.log(movie?.name||movie?.title||movie?.original_name);
            movieTrailer(movie?.name||movie?.title||movie?.original_name||"")
            .then((url) => {
                const urlParams=new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch((error)=>console.log(error));
        }
    }
    return ( 
        <div className="row">
         <h2>
            {props.title}
        </h2>
        <div className="row__posters">
        
        {movies.map(movie=>(
            <img 
            key={movie.id}
            onClick={()=> handleClick(movie)}
            className={`row__poster ${props.isLarge && "row__posterLarge"}`}
            src={`${imgurl}${props.isLarge ?movie.poster_path : movie.backdrop_path}`} alt={movie.name}>
            </img>
        ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }
        </div>
    );
}

export default Row
