import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Movie } from '../../types/movie';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get<Movie>(`/api/movies/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Failed to fetch movie details');
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <Card>
      <CardMedia
        component="img"
        height="400"
        image={movie.posterUrl}
        alt={movie.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h3">
          {movie.title}
        </Typography>
        <Typography variant="h5">Release Date: {movie.releaseDate}</Typography>
        <Typography variant="body1">{movie.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default MovieDetails;
