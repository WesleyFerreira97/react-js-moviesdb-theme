import styled from "styled-components";
import { colors } from "../utilities/colors";
import { typography } from "../utilities/typography";
import { breakpoint } from "../utilities/breakpoints";

export const MainContentWrap = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
`;

export const MainContentItem = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
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
        opacity: 0.5;
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
    position: absolute;
    top: 0;
    z-index: 10;

    .main-content {

        &__info-wrap{
            padding: 2rem;
            width: 50%;
        }
        
        &__title {
            ${typography.TitleXl}
            color: ${colors.neutral};
            font-size: 4rem !important;
            text-transform: uppercase;
            font-weight: 900;
            /* white-space: ; */
        }
    }
`;