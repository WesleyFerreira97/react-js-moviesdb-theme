import styled from "styled-components";
import { typography } from "../utilities/typography";   
import { colors } from "../utilities/colors";
import { breakpoint } from "../utilities/breakpoints";

export const Card = styled.div`
    height: 100%;
    overflow: hidden;
    position: relative;
`;

export const CardImage = styled.div`
    height: 300px;
    width: 100%;
    position: relative;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

export const PlayButton = styled.div`
    height: 70px;
    width: 100px;
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    z-index: 10;
    overflow: hidden;
    padding: .25rem;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
    
    &:before {
        content: '';
        height: 160%;
        width: 200%;
        position: absolute;
        bottom: -100%;
        right: -100%;
        z-index: -1;
        background: ${colors.primary};
        transform: rotate(-40deg);
    }

    &:hover {
        height: 100%;
        width: 100%;
        transition: .5s;
        font-size: 4rem;
        color: ${colors.primary};
        animation-timing-function: ease-in;

        &:before {
            content: '';
            background: ${colors.secondary};
            height: 100%;
            width: 300%;
            border: 5px solid ${colors.primary};
            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
    }
    
    &:active {
        transition: 0s;

        &:before {
            /* transition: 0s; */
            border: 5px solid #fff;
        }
        color: #fff;
    }
   
`;

export const CardInfo = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1rem;

    @media (min-width: ${breakpoint.md} ) {
        position: relative;
        background-color: inherit;
        display: block;
        padding: .5rem 0;
    }

    h1 {
        ${typography.TitleSm}
        color: ${colors.neutral};
        font-size: 1.5rem;
        font-weight: 800;

        @media (min-width: ${breakpoint.md} ) {
            font-weight: 500;
            font-size: 1.1rem;
        }
    }

    h2, h3, h4, h5, h6 {
        ${typography.TextSm}
        color: ${colors.tertiary};
    }
`;

export const CardInfoBar = styled.div`
    display: flex;
    align-items: center;

        > * {
                padding: .5rem 0;
        }
        > *:nth-child(2):before {
            content: '|';
            padding: 0 .75rem;
            color: #393E46;
            
        }
`;
