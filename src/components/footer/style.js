import styled from "styled-components";
import { colors } from "../utilities/colors";
import { typography } from "../utilities/typography";
// import { breakpoint } from "../utilities/breakpoints";

export const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 4rem 0;

    .footer-content {
        &__logo, &__navigation, &__newsletter {
            display: flex;
        }

        &__logo {
            flex: 1 auto 0;
            padding-right: 1.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            &-image {
                height: 150px;
                width: 150px;
                margin-bottom: 2.5rem;

                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
            }
        }

        &__navigation {
            flex: 2 0 0;
            justify-content: space-evenly;
            padding: 0 1.5rem;

        }

        &__newsletter {
            flex: 1 auto 0;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-left: 1.5rem;

            .subscribe { 
                ${typography.TextMd}
                color: ${colors.neutral};
                margin-bottom: 1.25rem;
            }

            .input-text {
                input {
                    width: 300px;
                    padding: .75rem 0;
                    background-color: inherit;
                    border: none;
                    border-bottom: 0.01rem solid ${colors.neutral};
                    color: ${colors.neutral};

                    &:focus {
                        outline: none;
                        
                        &::placeholder {
                            font-size: calc(100% - 25%);
                            font-weight: 700;
                            position: absolute;
                            top: -5%;
                        }
                    }

                }
                &::after {
                    position: absolute;
                    left: 5px;
                    top: 3px;
                    content: attr(data-placeholder);
                    pointer-events: none;
                    opacity: 0.6;
                }
            }

            .btn-subscribe {
                ${typography.TextSm}
                background-color: ${colors.primary};
                border: none;
                color: ${colors.neutral};
                margin-top: 3rem;
                /* padding: .5rem 1rem 1rem 0; */
                padding: .5rem;
                border-radius: 4px;
                text-transform: uppercase;
                font-weight: 700;
                cursor: pointer;

                &:active {
                    color: #fff;
                    transform: scale(.97);
                }
            }
        }
    }

    .footer-menu {
        li {
            ${typography.TextSm}
            color: #605d85;
            font-weight: 500;
            padding: .75rem .75rem .75rem 0;
        }
    }
`;

export const FooterCredits = styled.div`
    height: 5rem;
    width: 100%;
    background-color: ${colors.secondary};
    border-top: 1px solid #605d85;
    display: flex;
    justify-content: center;

    .footer-credits__wrap {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .footer-credits__info {
        color: #605d85;
        ${typography.TextSm}
        font-size: calc(100% - 15%);
        font-weight: 500;
        text-align: center;

        p {
            padding: .2rem 0;
        }
    }
`;

export const FooterSocial = styled.div`
    color: ${colors.neutral};
    font-size: 2rem;
    margin: 1rem 0;

    & > * {
        margin: 0 1rem;


        &:hover {
            /* color: #605d85; */
            color: ${colors.primary};
            transform: scale(.97);
            transition: .4s;
            cursor: pointer;
        }
    }

    & >:first-child {
        margin: 0 1rem 0 0;
    }

    & >:last-child {
        margin: 0 0 0 1rem;
    }

`;