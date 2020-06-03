import styled from 'styled-components/native'

export const Container = styled.View`
    width: 65px;
    height: 25px;

    margin: 0 5px;

    border-radius: 3px;
    background: ${(props: { color: string }) => props.color};
    align-items: center;
    justify-content: center;
`

export const PokeTypeText = styled.Text`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;

    /* Text / White */

    color: #ffffff;
`
