import React, { useEffect, useState, useReducer } from 'react'
import { MainContentWrap, MainContentItem, MainContentBackground, MainContentInfo } from './styles'
import { getPopularMovies, getImageUrl } from '../../services/apiFunctions'



export function MainContent() {
    const initialState = {count: 0};
    const [popularMovies, setPopularMovies] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);
    let i;

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return {count: state.count + 1};
            case 'decrement':
                return {count: state.count - 1};
            default:
                throw new Error();
        }
    }

    useEffect(() => {
        getPopularMovies().then(data => {
            for(i = 5; i < 6 ; i++){
                setPopularMovies(oldArray => [...oldArray, data[i]]);
            }
        });
    }, []);

    useEffect(() => {
        console.log(popularMovies);
    }, [popularMovies]);

    return (
        <MainContentWrap>
        {popularMovies.map( (movie, index) => (
            <MainContentItem key={index} className={index == 0 ? 'current-index' : ''}>
                {console.log(movie)}
                <MainContentBackground>
                    <div className="main-content__overlay"></div>
                    <img src={getImageUrl(movie.backdrop_path)} alt={movie.title} />
                </MainContentBackground>
                <MainContentInfo>
                    <div className="main-content__info-wrap">
                        <h1 className="main-content__title">{movie.title}</h1>
                    </div>
                </MainContentInfo>
            </MainContentItem>
        ))}
        <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
        </MainContentWrap>  
    )
}
