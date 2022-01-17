import styled from "styled-components";
import { colors } from "../utilities/colors";
import { typography } from "../utilities/typography";

export const MoviesFilterWrap = styled.div`
    /* background-color: ${colors.primary}; */
    width: 100%;
    margin: 1rem 0;
`;

export const MobileDropDown = styled.div`
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: ${colors.neutral};

    h3 {
        /* color: ${colors.neutral}; */
        ${typography.TitleMd};
        padding-left: 1rem;
        font-size: 1rem;
    }
`;

export const Form = styled.form`

    form {
        display: none;
    }
`;