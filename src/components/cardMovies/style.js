import styled from "styled-components";
import { typography } from "../utilities/typography";   
import { color } from "../utilities/colors";

export const Card = styled.div`
    height: 100%;
    overflow: hidden;
`;

export const CardImage = styled.div`
    height: 300px;
    width: 100%;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

export const CardInfo = styled.div`

    h1 {
        ${typography.TitleSm}
        color: ${color.neutral};
    }

    h2, h3, h4, h5, h6 {
        ${typography.TextSm}
        color: ${color.neutral};
    }
`;

export const CardInfoBar = styled.div`
    display: flex;
        justify-content: space-between;

        > * {
                padding: .75rem 0;
        }
`;