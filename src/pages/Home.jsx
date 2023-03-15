import { useState, useEffect } from 'react';
import { getPopularFilms } from "components/Api/Api";
import { MoviesList } from 'components/MoviesList/MoviesList';


const Home = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        setError(null)
       const getFetch = async () => {
        await getPopularFilms()
        .then(movie => {
            setMovies(movie.results)
        })
        .catch(error => setError(error))
       }
        getFetch()
    }, [error])
    
    return (
        <div> 
            <h1>Trending Today</h1>
            <MoviesList movies={movies}/>
        </div>
    )
};

export default Home