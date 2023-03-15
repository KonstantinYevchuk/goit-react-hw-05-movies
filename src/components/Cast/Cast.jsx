import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieCast } from "components/Api/Api";

export const Cast = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        setError(null)
        const getMovie = async () => {
        await getMovieCast(id)
            .then(movie => setMovie(movie))
            .catch(error => setError(error));
        }
        getMovie()
    }, [id, error])
    const {cast} = movie
    
    return (
        <div>
            {cast ? cast.map(item => 
            <ul key={item.id}>
                <li>
                    <h3>{item.name}</h3>
                </li> 
                <li>
                    <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} 
                    alt={item.name} 
                    width="250" 
                    />
                </li> 
            </ul>) : ''}
        </div>
    )  
}

