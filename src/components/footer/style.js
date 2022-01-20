import styled from "styled-components";
import { colors } from "../utilities/colors";
import { typography } from "../utilities/typography";
// import { breakpoint } from "../utilities/breakpoints";

export const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    padding: 4rem 0;

    .footer-content {
        &__logo, &__navigation, &__newsletter {
            display: flex;
        }

        &__logo {
            flex: 1 auto 0;
            padding-right: 1.5rem;
        }

        &__navigation {
            flex: 2 0 0;
            justify-content: space-around;
            padding: 0 1.5rem;

        }

        &__newsletter {
            flex: 1 auto 0;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-left: 1.5rem;

            .subscribe { 
                ${typography.TextMd}
                color: ${colors.neutral};
                margin-bottom: 1.25rem;
            }

            .input-text {
                input {
                    padding: .5rem 0;
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
        }
    }

    .footer-menu {
        li {
            ${typography.TextSm}
            color: ${colors.tertiary};
            padding: .75rem .75rem .75rem 0;
        }
    }
`;