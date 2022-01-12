import styled from "styled-components";

export const Grid = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: rgb(76, 26, 99);
`;

export const Row = styled.div`
    width: ${props => props.width};
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: rgb(125, 22, 194);
`;

Row.defaultProps = {
    width: "90%"
}

export const Col = styled.div`
    height: 100%;
    width: ${props => props.width};
    min-width: ${props => props.minWidth};
`;

Col.defaultProps = {
    width: "100%",
    minWidth: "150px",
    height: "100%"
}