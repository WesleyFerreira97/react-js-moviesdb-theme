import React, { useEffect, useState, useReducer, useRef } from 'react'
import { MainContentWrap, MainContentItem, MainContentBackground, MainContentInfo, NextPrev } from './styles'
import { getPopularMovies, getImageUrl } from '../../services/apiFunctions'
import { Row } from '../utilities/grid'


export function MainContent() {
    const initialState = {count: 0, aff: 22};
    const [popularMovies, setPopularMovies] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);
    const gridWrapRef = useRef('');
    let i;

    function reducer(state, action) {
        console.log(action, 'log');
        console.log(state, 'STATE');
        switch (action.type) {
            case 'increment':
                return {aff: state.aff + 1, count: state.count};
            case 'decrement':
                return {count: state.count - 1, aff: state.aff};
            default:
                throw new Error();
        }
    }

    useEffect(() => {
        console.log(gridWrapRef.current , 'STATE');
    }, [state]);

    useEffect(() => {
        // Get Specific popular movies
        getPopularMovies().then(data => {
            for(i = 5; i < 8 ; i++){
                setPopularMovies(oldArray => [...oldArray, data[i]]);
            }
        });
    }, []);

    return (
        <MainContentWrap ref={gridWrapRef}>
        {popularMovies.map( (movie, index) => (
            <MainContentItem key={index} className={index == 0 ? 'current-index' : ''}>
                <MainContentBackground>
                    <div className="main-content__overlay"></div>
                    <img src={getImageUrl(movie.backdrop_path)} alt={movie.title} />
                </MainContentBackground>
                <MainContentInfo>
                    <Row width="80%">
                        <div className="main-content__info-wrap">
                            <h1 className="main-content__title">{movie.title}</h1>
                        </div>
                    </Row>
                </MainContentInfo>
            </MainContentItem>
        ))}
        <NextPrev >
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
        </NextPrev>
        </MainContentWrap>  
    )
}
