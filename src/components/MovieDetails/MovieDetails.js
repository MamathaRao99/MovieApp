import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchAsyncMovieOrShowDetail,getSelectedMovieOrShow,} from "../../features/movies/movieSlice";
import "./MovieDetails.css"
const MovieDetails = () => {
    let {imdbId} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrShow)
    console.log(data)

    useEffect(() => {
      dispatch(fetchAsyncMovieOrShowDetail(imdbId));
    }, [dispatch, imdbId]);
    
    return (
      <div className="movie-section">
        <div className="section-left">
          <div className="movie-title">{data.Title}</div>
          <div className="movie-rating">
            <span>
              IMDB Rating <i className="fa-solid fa-star"></i> :
              {data.imdbRating}
            </span>
            <span>
              IMDB Votes <i className="fa-solid fa-thumbs-up"></i> :{" "}
              {data.imdbVotes}
            </span>
            <span>
              Runtime <i className="fa-solid fa-film"></i> : {data.Runtime}
            </span>
            <span>
              Year <i className="fa-regular fa-calendar"></i> : {data.Year}
            </span>
          </div>
        </div>
      </div>
    );
};

export default MovieDetails;