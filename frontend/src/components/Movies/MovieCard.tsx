import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Movie } from '../../types/movie';
import { useNavigate } from 'react-router-dom';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <Card onClick={handleCardClick}>
      <CardMedia
        component="img"
        height="140"
        image={movie.posterUrl}
        alt={movie.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.description.substring(0, 100)}...
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
