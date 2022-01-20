import styled from "styled-components";
import { colors } from "../utilities/colors";
import { typography } from "../utilities/typography";
// import { breakpoint } from "../utilities/breakpoints";

export const MainContentWrap = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;

    .main-content__item-wrap {
        white-space: nowrap;
        transition: transform 0.3s;
        height: 100%;
    }

    .current-index {
        z-index: 30;
    }
`;

export const MainContentItem = styled.div`
    height: 100%;
    width: 100%;
    display: inline-flex;
`;

export const MainContentBackground = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    background-color: ${colors.primary};

    .main-content__overlay {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        z-index: 1;
        background-color: ${colors.secondary};
        opacity: 0.7;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

`;

export const MainContentInfo = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    z-index: 10;

    .main-content {

        &__info-wrap{
            white-space: normal;
            /* padding: 2rem; */
            width: 50%;
        }
        
        &__title {
            ${typography.TitleXl}
            color: ${colors.neutral};
            font-size: 3rem !important;
            text-transform: uppercase;
            font-weight: 900;
            /* white-space: ; */
        }

        &__overview {
            ${typography.TextMd}
            color: ${colors.neutral};
        }
    }
`;


export const NextPrev = styled.div`
    z-index: 30;
    position: absolute;
    bottom: 0;
`;