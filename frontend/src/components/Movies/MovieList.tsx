import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchMovies } from '../../redux/slices/movieSlice';
import MovieCard from './MovieCard';
import LoadingSpinner from '../Shared/LoadingSpinner';
import { Grid } from '@mui/material';

const MovieList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { movies, loading } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={4}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
