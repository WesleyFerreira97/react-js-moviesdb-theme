import React, { useEffect, useState } from 'react'
import { getImageUrl, getGenre } from '../../services/apiFunctions'
import { Card, CardImage, CardInfo, CardInfoBar, PlayButton } from './style';
import { BsPlay } from "react-icons/bs";

export function CardMovies(props) {
    const { title, vote_average, backdrop_path, genre_ids } = props.movie;
    const [genre, setGenre] = useState('');

    useEffect(() => {
        getGenre(genre_ids[0]).then( data => setGenre(data.name));
    }, [genre_ids]);

    return (
        <Card>
            <CardImage>
                <img src={getImageUrl(backdrop_path)} alt={title} />
                <PlayButton><BsPlay /></PlayButton>
            </CardImage>
            <CardInfo>
                <CardInfoBar>
                    <h1>{title}</h1>
                </CardInfoBar>
                <CardInfoBar>
                    <h2>IMDb {vote_average}</h2>
                    <h2>{genre}</h2>
                </CardInfoBar>
            </CardInfo>
        </Card>
    );
}


