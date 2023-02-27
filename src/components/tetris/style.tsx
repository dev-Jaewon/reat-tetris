import styled from "styled-components";

export const GameConatiner = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 765px;
    gap: 30px;
`;

export const BlockBoardContainer = styled.div`
    display: flex;
    position: relative;
    width: fit-content;
    height: fit-content;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;
    background-color: black;
    box-shadow: 0rem 0rem 1rem hsl(0deg 0% 0% / 100%);

    & > div {
        display: flex;
        border: 1px solid gray;
    }
`;

export const RowCoinatiner = styled.div``;
