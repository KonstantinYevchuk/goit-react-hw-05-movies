import Home from "pages/Home";
import Movies from "pages/Movies";
import NotFound from "pages/NotFound";
import MovieDetails from "pages/MovieDetails";
// import { MoviesList } from 'components/MoviesList/MoviesList';
import { Routes, Route} from "react-router-dom";
import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";
import Layout from 'components/Layout/Layout';


export const App = () => {
  return (   
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path=":id" element={<MovieDetails />}> 
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
          <Route path="*" element={<NotFound />} />
          </Route>
      </Routes>
      
  );
};

