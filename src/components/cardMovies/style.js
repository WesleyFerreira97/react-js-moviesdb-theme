import styled from "styled-components";
import { typography } from "../utilities/typography";   
import { color } from "../utilities/colors";
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
    width: 100px;
    height: 70px;
    position: absolute;
    bottom: 0;
    right: 0;
    color: #fff;
    z-index: 10;
    font-size: 2rem;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: .25rem;
    cursor: pointer;
    
    &:before {
        content: '';
        z-index: -1;
        position: absolute;
        width: 200%;
        height: 160%;
        bottom: -100%;
        right: -100%;
        transform: rotate(-40deg);
        background: ${color.primary};
    }

    &:hover {
        height: 100%;
        width: 100%;
        transition: .5s;
        font-size: 4rem;
        color: ${color.primary};
        animation-timing-function: ease-in;

        &:before {
            content: '';
            background: ${color.secondary};
            height: 100%;
            width: 300%;
            border: 5px solid ${color.primary};
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

    /* @keyframes playAnimation {
        to {

    } */
    /* @media (min-width: ${breakpoint.md} ) { 
        top: inherit;
        bottom: 0;
    }
     */
   
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
        color: ${color.neutral};
        font-size: 1.5rem;
        font-weight: 800;

        @media (min-width: ${breakpoint.md} ) {
            font-weight: 500;
            font-size: 1.1rem;
        }
    }

    h2, h3, h4, h5, h6 {
        ${typography.TextSm}
        color: ${color.tertiary};
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
