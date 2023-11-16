import styled from "styled-components";

interface Props {
    width?: number;
    alignCenter?: boolean;
}

export const Table = styled.table`
    width: 98%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 1120px;
    margin: 20px;
`; 

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th<Props>`
    border-bottom: inset;
    padding-bottom: 5px;
    text-align: ${(p) => (p.alignCenter ? 'center' : 'start')};
    width: ${(p) => (p.width ? p.width + '%' : 'auto')};
`;