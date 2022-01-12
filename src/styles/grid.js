import styled from "styled-components";

export let Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    background: ${props => props.bg};
`;

Container.defaultProps = {
    bg: 'inherit',
}

export const Row = styled.span`
    width: ${props => props.width};
    display: flex;
    flex-wrap: wrap;
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

const minWidth = 250;

export const GridCols = styled.div`
    width: 100%;
    display: grid;
    grid-auto-columns: 300px;
    grid-template-columns: repeat(${props => (
        props.componentWidth / props.xs <= minWidth ? 1 : props.xs
    )}, minmax(${minWidth}px, 1fr));

    @media (min-width: 768px) {
        grid-template-columns: repeat(${props => (
        props.componentWidth / props.sm <= minWidth ? 1 : props.sm
    )}, minmax(${minWidth}px, 1fr));
    }
    @media (min-width: 920px) {
        grid-template-columns: repeat(${props => (
        props.componentWidth / props.md <= minWidth ? 1 : props.md
    )}, minmax(${minWidth}px, 1fr));
    }
    @media (min-width: 1200px) {
        grid-template-columns: repeat(${props => (
        props.componentWidth / props.lg <= minWidth ? 1 : props.lg
    )}, minmax(${minWidth}px, 1fr));
    }

    overflow: hidden;
    gap: ${props => props.gap};
    background-color: #1B262C;
`;

GridCols.defaultProps = {
    cols: 3,
    gap: "0"
}
