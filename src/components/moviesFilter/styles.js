import styled, {css, keyframes } from "styled-components";
import { colors } from "../utilities/colors";
import { typography } from "../utilities/typography";
import { breakpoint } from "../utilities/breakpoints";

export const MoviesFilterWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    margin: 1rem 0;
`;

export const MobileDropDown = styled.div`
    display: flex;
    align-items: center;
    z-index: 200;
    font-size: 2rem;
    color: ${colors.neutral};

    .dropdown-label {
        padding-left: 1rem;
        ${typography.TitleMd};
        font-size: 1rem;
    }
`;

export const FormFilter = styled.div`
    max-height: 100%;
    position: relative;
    z-index: 10;
    overflow: hidden;


    ${props => {
        if (props.statusDropDown) {
            return css`
                max-height: 100%;
                transition: .4s;
                
            `
        } else {
            return css`
                transition: .4s;
            `
            }
        }
    }

    .form-wrap {
        /* display: flex; */
    }

    .form-group {
        width: 100%;
        display: flex;
        flex-direction: column;
        
        label {
            ${typography.TextSm};
            color: ${colors.neutral};
            padding: 1.5rem 0 .5rem 0;
        }

        select {
            padding: .3rem;
            width: 50%;

            option {
                padding: 1rem;
            }
        }
    }

    .submit-btn {
        margin: 1rem 0;
        ${typography.TextMd};
        color: ${colors.neutral};
        background-color: ${colors.primary};
        padding: .5rem;
        border-radius: 5px;
        border: none;
    }

    @media (min-width: ${breakpoint.lg}) {
        .form-wrap {
            display: flex;
            flex-direction: row;
        }

        .form-group {
            width: 25;
            /* background-color: gray; */
            /* flex-direction: row; */

            select {
                width: 100%;
            }
        }
    }

`;


