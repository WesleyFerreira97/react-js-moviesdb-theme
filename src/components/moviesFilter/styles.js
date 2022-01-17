import styled, {css} from "styled-components";
import { colors } from "../utilities/colors";
import { typography } from "../utilities/typography";

// const Open = styled.css`
//     display: none;
//     transform: translate3d(-100%, 0, 0);
//     transition: 1s;
// `;

// const Close = styled.css`
//     display: block;
//     transform: translate3d(0, 0, 0);
//     transition: 1s;
// `;

export const MoviesFilterWrap = styled.div`
    width: 100%;
    margin: 1rem 0;
`;

export const MobileDropDown = styled.div`
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: ${colors.neutral};

    h3 {
        ${typography.TitleMd};
        padding-left: 1rem;
        font-size: 1rem;
    }
`;

export const FormFilter = styled.form`

    form {
        ${props => (props.statusDropDown ? css`display: block;`: css`display: none;`)};
    }
`;

