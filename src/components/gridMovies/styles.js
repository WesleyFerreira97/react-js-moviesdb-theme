// import stled component
import styled from 'styled-components';
import { typography } from '../utilities/typography';
import { color } from '../utilities/colors';
// import { breakpoint } from '../utilities/breakpoints';

export const SectionTitle = styled.h1`
    ${typography.TitleXl}
    color: ${color.neutral};
    margin: 1.5rem 0;
`;