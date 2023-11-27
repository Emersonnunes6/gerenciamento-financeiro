import styled from "styled-components";

interface Props {
    $width?: number;
    $alignCenter?: boolean;
}

export const Tr = styled.tr``;

export const Td = styled.td<Props>`
    padding-top: 15px;
    text-align: ${(p) => (p.$alignCenter) ? 'center' : 'start'};
    word-break: break-all;

    svg {
        width: 18px;
        height: 18px;
    }
`;

