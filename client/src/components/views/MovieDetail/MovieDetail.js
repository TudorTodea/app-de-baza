import React, { useEffect, useState } from 'react'
import { Row, Button } from 'antd';
import axios from 'axios';

import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE } from '../../Config'
import GridCards from '../../commons/GridCards';
import MainImage from '../../views/LandingPage/Sections/MainImage';
import MovieInfo from './Sections/MovieInfo';
function MovieDetailPage(props) {

    const movieId = props.match.params.movieId
    const [Movie, setMovie] = useState([])
    const [LoadingForMovie, setLoadingForMovie] = useState(true)

    const movieVariable = {
        movieId: movieId
    }

    

   
}

export default MovieDetailPage

