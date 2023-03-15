import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSearchMoviesById } from 'components/Api/Api';
import { Link, Outlet } from "react-router-dom";


const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState('');
    
    useEffect(() => {
        setError(null)
        const getMovie = async () => {
        await getSearchMoviesById(id)
            .then(movie => setMovie(movie))
            .catch(error => setError(error));
        }
        getMovie()
    }, [id, error]) 

    const { title, poster_path, release_date, overview, genres
    } = movie;
    
    const IMAGE_BASE_URL = `https://image.tmdb.org/t/p/w500/${poster_path}`;
   
    return (
        <main>
            <div>
            <img src={IMAGE_BASE_URL} alt={title} width="350" height="380" />
            <h2>{title}({release_date ? release_date.slice(0, 4) : ''})</h2>
            <p>Overview: {overview}</p>
            <p>Genres: {genres ? genres.map(item => `${item.name} `) : ''}</p>
            </div>
            <h3>Aditional information</h3>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
            <Outlet />
        </main>
    )
}
export default MovieDetails