import styled from "styled-components";

export const Title = styled.h1`
    background: red;
    color: ${(props) => (props.isRed === true ? "black" : "green")};
    small {
        background: white;
    }
`;

export const Paragrafo = styled.p`
    color: red;
`;
