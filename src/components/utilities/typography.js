import { css } from "styled-components";
import { breakpoint } from "./breakpoints";

const title = css`
    /* font-family: 'Bebas Neue', cursive; */
    font-family: 'Montserrat', sans-serif;
`;

const text = css`
    font-family: 'Montserrat', sans-serif;
`;

export const typography = {}

typography.TitleXl = css`
    ${title}
    font-size: 2.2rem;
    line-height: 120%;
    font-weight: 800 !important;
    letter-spacing: .1rem;

    @media (min-width: ${breakpoint.md} ) {
        font-size: 2.5rem;
    }
`;

typography.TitleLg = css`
    ${title}
    font-size: 2.1rem;
    line-height: 140%;
    font-weight: 500;
`;

typography.TitleMd = css`
    ${title}
    font-size: 1.8rem;
    line-height: 140%;
    font-weight: 500 !;
`;

typography.TitleSm = css`
    ${title}
    font-size: 1rem;
    line-height: 140%;
    font-weight: 500;
`;

typography.TextMd = css`
    ${text}
    font-size: 1rem;
    line-height: 140%;
    font-weight: 500;
`;

typography.TextSm = css`
    ${text}
    font-size: .9rem;
    line-height: 140%;
    font-weight: 300;
`;














