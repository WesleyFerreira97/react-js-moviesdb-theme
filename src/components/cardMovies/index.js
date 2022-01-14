import React from 'react'
import { getImageUrl } from '../../services/apiFunctions'
import { Card, CardImage, CardInfo, CardInfoBar } from './style';

export function CardMovies(props) {
    const { title, vote_average, backdrop_path, genre_ids, release_date } = props.movie;

    return (
        <Card>
            <CardImage>
                <img src={getImageUrl(backdrop_path)} alt={title} />
            </CardImage>
            <CardInfo>
                <CardInfoBar>
                    <h1>{title}</h1>
                </CardInfoBar>
                <CardInfoBar>
                    <h2>{vote_average}</h2>
                    <h2>{genre_ids[0]}</h2>
                </CardInfoBar>
            </CardInfo>

        </Card>
    );
}

