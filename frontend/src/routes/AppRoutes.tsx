import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import MovieList from '../components/Movies/MovieList';
import MovieDetails from '../components/Movies/MovieDetails';
import Profile from '../components/Profile/UserProfile';
import PrivateRoute from '../components/Shared/PrivateRoute';

const AppRoutes: React.FC = () =>
    <Routes>
    <Route path='/' element={<MovieList />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/movies/:id' element={<MovieDetails />} />
    <Route path='/profile' element={<PrivateRoute>
        <Profile />
    </PrivateRoute>} />
</Routes>

export default AppRoutes;