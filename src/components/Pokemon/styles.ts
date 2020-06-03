import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
    width: 334px;
    height: 115px;
    padding: 20px;
    margin: 10px 0;

    flex-direction: row;

    background: ${(props: { color: string }) => props.color};
    border-radius: 10px;
`

export const PokeInformationsContainer = styled.View`
    flex: 1;
`

export const PokeName = styled.Text`
    /* Pokemon Name */

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
    /* identical to box height */

    /* Text / White */

    color: #ffffff;
`

export const PokeBallImage = styled.Image`
    width: 130px;
    height: 130px;

    top: -20px;
    right: -20px;
`
