import styled from "styled-components";

interface Props {
    $backgroundcolor?: string;
    $width?: string;
    $margintop?: string;
    $height?: string;
}

export const ContainerForm = styled.div<Props>`
    width: 100vw;
    height: ${(p) => (p.$height) ? (p.$height) : '45vh'};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 5vh;
`

export const Title = styled.h1``;

export const NewUser = styled.p`
    margin-top: 15px;
`;

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px 15px;
    width: 20%;
    height: 80%;

    @media (max-width: 750px) {
        width: 20%;

        p{
            font-size: 12px;
        }

        span{
            font-size: 20px;
        }

        svg{
            display: none;
        }
    }
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;
    margin: 20px auto;
    position: relative;

    svg {
        width: 25px;
        height: 25px;
    }
`;

export const Input = styled.input`
    height: 50px;
    padding-left: 5px;
    width: 250px;
    border-radius: 5px;
    border: 1px solid gray;
    font-family: 'Poppins', Sans-Serif;
    margin-top: 5px;
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Button = styled('button')<Props>`
    font-family: 'Poppins', Sans-Serif;
    background-color: ${(p) => (p.$backgroundcolor) ? (p.$backgroundcolor) : 'teal'};
    color: ${(p) => (p.color) ? (p.color) : 'white'};
    width: ${(p) => (p.$width) ? (p.$width) : '130px'};
    height: 50px;
    border: none;
    border-radius: 5px;
    margin-top: ${(p) => (p.$margintop) ? (p.$margintop) : '10px'};
    cursor: pointer;
`;