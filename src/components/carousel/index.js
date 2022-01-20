import React, { useState, useEffect } from 'react';
import { MainContentWrap, MainContentItem, MainContentBackground, MainContentInfo, NextPrev } from './styles'
import { getPopularMovies, getImageUrl } from '../../services/apiFunctions'
import { Row } from '../utilities/grid'

export const CarouselItem = (props) => {
    const { title, backdrop_path, overview } = props.movie;
    console.log(props.movie);
    return (
        <>
            <MainContentItem>
                <MainContentBackground>
                    <div className="main-content__overlay"></div>
                    <img src={getImageUrl(backdrop_path)} alt={title} />
                </MainContentBackground>
                <MainContentInfo>
                    <Row width="80%">
                        <div className="main-content__info-wrap">
                            <h1 className="main-content__title">{title}</h1>
                            <p className="main-content__overview">{overview}</p>
                        </div>
                    </Row>
                </MainContentInfo>
            </MainContentItem>
        </>
    )
}

export const Carousel = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        getPopularMovies().then(data => setPopularMovies(data));
    }, []);

    const updateIndex = (newIndex) => {

        if(newIndex < 0) {
            newIndex = popularMovies.length - 1;
        } else if(newIndex >= popularMovies.length ) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }

    return (
        <>
        <MainContentWrap>
            <div className="main-content__item-wrap" style={{transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}>
                {popularMovies.map((movie, index) => (
                    <CarouselItem key={index} movie={movie} />
                ))}
            </div>
            <Row width="80%">
                <NextPrev >
                    <button onClick={() => updateIndex(activeIndex - 1)}>{'< Prev'}</button>
                    <button onClick={() => updateIndex(activeIndex + 1)}>{'Next > '}</button>
                </NextPrev>
            </Row>
        </MainContentWrap>  
        </>
    );
}
