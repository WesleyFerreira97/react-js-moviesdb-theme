import styled from "styled-components";

export const Grid = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const Row = styled.div`
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