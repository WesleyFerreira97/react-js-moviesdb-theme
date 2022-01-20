import React, { useState, useEffect } from 'react';
import { MainContentWrap, MainContentItem, MainContentBackground, MainContentInfo, NextPrev } from './styles'
import { getPopularMovies, getImageUrl } from '../../services/apiFunctions'
import { Row } from '../utilities/grid'

export const CarouselItem = (props) => {
    const { title, backdrop_path } = props.movie;

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
        console.log(newIndex, 'before');
        if(newIndex < 0) {
            newIndex = popularMovies.length - 1;
        } else if(newIndex >= popularMovies.length ) {
            newIndex = 0;
        }
        console.log(newIndex);
        setActiveIndex(newIndex);
    }

    return (
        <>
        <MainContentWrap>
            <div className="main-content__item-wrap" style={{transform: `translateX(-${activeIndex * 100}%)` }}>
                {popularMovies.map((movie, index) => (
                    <CarouselItem key={index} movie={movie} />
                ))}
            </div>
        
        <NextPrev >
            <button onClick={() => updateIndex(activeIndex - 1)}>{'< Prev'}</button>
            <button onClick={() => updateIndex(activeIndex + 1)}>{'Next > '}</button>
        </NextPrev>
        </MainContentWrap>  
        </>
    );
}
