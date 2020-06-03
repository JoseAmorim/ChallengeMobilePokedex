import styled from 'styled-components/native'
import { FlatList } from 'react-native'
import { Pokemon } from '../../utils/types'

export const Container = styled.View`
    flex: 1;
    background: #ffffff;
`

export const PokemonList = styled(
    FlatList as new () => FlatList<Pokemon>,
).attrs({
    contentContainerStyle: {
        alignItems: 'center',
    },
})`
    flex: 1;
    margin-top: 20px;
`

export const PokeballImage = styled.Image`
    /* Pokeball */

    position: absolute;
    width: 100%;
    left: 0px;
    top: 0px;
    /* Gradient / Pokeball */
`

export const TitleContainer = styled.View`
    margin-top: 10px;
    width: 334px;
    align-self: center;
`

export const Title = styled.Text`
    width: 334px;
    height: 38px;

    /* Application Title */

    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;

    /* Text / Black */

    color: #17171b;
`

export const SubTitle = styled.Text`
    /* Description */

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    /* Text / Gray */

    color: #747476;
`

export const SearchInput = styled.TextInput`
    /* Background */

    width: 334px;
    height: 60px;
    margin-top: 20px;

    /* Background / Default Input */

    background: #f2f2f2;
    border-radius: 10px;

    padding: 0px 20px;
`
