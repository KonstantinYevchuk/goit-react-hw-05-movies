import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieReviews } from "components/Api/Api";

export const Reviews = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        setError(null)
        const getMovie = async () => {
        await getMovieReviews(id)
            .then(movie => setMovie(movie))
            .catch(error => setError(error));
        }
        getMovie()
    }, [id, error])
    console.log(movie.results);
    
    return (
        <div>
            {movie.results ? movie.results.map(item => 
            <ul key={item.id}>
               <li ><h3>{item.author}</h3></li>  
                <li><p>{item.content}</p></li>
                </ul>
            ) : <h3>Sorry, there is no content</h3>}
        </div>
    )  
}
