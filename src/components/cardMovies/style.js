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

export const LikeButton = styled.button`
    background-color: inherit;
    border: inherit;
    color: #fff;
    display: flex;
    position: absolute;
    /* bottom: .5rem; */
    top: 0;
    right: 0;
    z-index: 10;
    padding: 1rem;
    font-size: 2.5rem;
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

    h1 {
        ${typography.TitleSm}
        color: ${color.neutral};
        font-size: 1.5rem;
        font-weight: 800;
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
