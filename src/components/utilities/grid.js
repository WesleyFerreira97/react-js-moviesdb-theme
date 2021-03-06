import styled from "styled-components";
import { breakpoint } from "./breakpoints";
import { colors } from "./colors";

export let Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    background: ${props => props.bg};
    padding: 5rem 0;
`;

Container.defaultProps = {
    bg: '#0F1021',
}

export const Row = styled.div`
    width: ${props => props.width};
    display: flex;
    flex-wrap: wrap;
    position: relative;
    @media (max-width: ${breakpoint.sm}) {
        width: 95%;
    }
`;

Row.defaultProps = {
    width: "90%"
}

export const Col = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    min-width: ${props => props.minWidth};
    flex-basis: 1;
    flex-grow: 1;
`;

Col.defaultProps = {
    width: "100%",
    minWidth: "150px",
    height: "auto"
}

export const GridCols = styled.div`
    width: 100%;
    overflow: hidden;
    display: grid;
    gap: ${props => props.gap};
    grid-template-columns: repeat(auto-fill, minmax(${props => props.xs}px, 1fr));

    @media (min-width: 540px) {
        grid-template-columns: repeat(auto-fill, minmax(${props => props.sm}px, 1fr));
    }

    @media (min-width: 720px) {
        grid-template-columns: repeat(auto-fill, minmax(${props => props.md}px, 1fr));
    }

    @media (min-width: 960px) {
        grid-template-columns: repeat(auto-fill, minmax(${props => props.lg}px, 1fr));
    }
`;

GridCols.defaultProps = {
    xs: 150,
    // sm: 170,
    // md: 190,
    // lg: 220,
    cols: 0,
    gap: "0"
}
