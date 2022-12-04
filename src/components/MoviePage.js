import { useEffect, useState} from 'react';

import MovieCard from './MovieCard';
import SearchIcon from '../search.svg';

import '../Movie.css';
const API_URL = `https://www.omdbapi.com?apikey=95bc6fb5`;

const movie = {
    "Title": "The French Dispatch",
    "Year": "2021",
    "imdbID": "tt8847712",
    "Type": "movie",
    "Poster": "http://m.media-amazon.com/images/M/MV5BNmQxZTNiODYtNzBhYy00MzVlLWJlN2UtNTc4YWZjMDIwMmEzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
}

const MoviePage = (props) => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
   
    const searchMovies = async(title) => { 
        if(title.length == 0){}
        else{

            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();
            //console.log(data);
            setMovies(data.Search);
        }
    }
    useEffect(() =>{
        searchMovies('007')
    },[]);

    const handleKeyDown = event => {

        if (event.key === 'Enter') {
          // 👇️ your logic here
          searchMovies(searchTerm);
        }
      };

    return(
    <>
        <div className='movie-page'>
            <div className='search'>
                <input 
                    placeholder='Search for Movies'
                    value={searchTerm}
                    onChange = {(e) => setSearchTerm(e.target.value)}
                   onKeyDown={handleKeyDown}
                   />
                   <img 
                   src={SearchIcon}
                   alt = "search"
                   onClick={()=>
                    searchMovies(searchTerm)
                }   
                />
            </div>

            {
              movies?.length > 0 
              ? (
                <div className="container">
                    { movies.map((movie) => (
                        <MovieCard movie={movie}
                         setTasks={props.setTasks} tasks={props.tasks}
                          addTask={props.addTask}/>
                    ))}
                </div>
              ) : (
                <div className='empty'>
                    <h1> No Movies Found</h1>
                </div>
                )
            }   
        </div>
    </>
    );
}

export default MoviePage;