import styled from "styled-components";

interface Props {
    $backgroundcolor?: string;
    $width?: string;
    $margintop?: string;
    $height?: string;
}

export const Container = styled.div`
    height: 150px;
    text-align: center;
    background: teal;
`;

export const Header = styled.h1``;

export const Exit = styled.button<Props>`
    margin-left: 55vw;
    padding-top: 5px;
    font-family: 'Poppins', Sans-Serif;
    background-color: ${(p) => (p.$backgroundcolor) ? (p.$backgroundcolor) : 'teal'};
    color: ${(p) => (p.color) ? (p.color) : 'white'};
    width: ${(p) => (p.$width) ? (p.$width) : '130px'};
    height: 20px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export const Title = styled.div`
    padding-top: ${() => localStorage.getItem('token') ? '' : '20px'};
    color: #fff;
`