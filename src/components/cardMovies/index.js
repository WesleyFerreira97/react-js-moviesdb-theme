import React, {useState, useEffect } from 'react'
import { getImageUrl } from '../../services/apiFunctions'
import './style.css'

export function CardMovies(props) {
    const { title, vote_average, poster_path, backdrop_path, overview, genre_ids, release_date } = props.movie;

    console.log(props.movie);


    return (
        <div className='card'>
            <div className='card__image'>
                <img src={getImageUrl(backdrop_path)} alt={title} />
            </div>
            <div className='card-info'>
                <div className='card-info__bar'>
                    <h1 className='card-info__title'>{title}</h1>
                    {/* <h3 className='card-info__rating'>{vote_average}</h3> */}
                </div>
                <div className='card-info__bar'>
                    <h3 className='card-info__release'>{release_date}</h3>
                    <h3 className='card-info__tag'>{genre_ids[0]}</h3>
                </div>
            </div>
        </div>
    );
}

