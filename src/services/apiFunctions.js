
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=' + process.env.REACT_APP_API_KEY;
const IMAGE_URL = 'https://image.tmdb.org/t/p/original';

export const getMovies = (page) => {

}

export const getPopularMovies = async () => {
    return fetch(BASE_URL + '/discover/movie' + API_KEY + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
        .then(res => res.json())
        .then(data => data.results);
}

export const getImageUrl = (imageId) => {
    return IMAGE_URL + imageId;
}

export const getGenre = async (genreId) => {
    return fetch(BASE_URL + '/genre/movie/list' + API_KEY + '&language=en-US')
        .then(res => res.json())
        .then(data => data.genres.find(genre => genre.id === genreId));
}