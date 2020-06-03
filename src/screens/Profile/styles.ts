import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background: ${(props: { color: string }) => props.color};
`

export const PokemonTitle = styled.Text`
    position: absolute;
    width: 585px;
    height: 119px;
    left: -86px;
    top: 25px;

    /* Title */

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 100px;
    line-height: 119px;
    text-align: center;

    color: rgba(255, 255, 255, 0.3);
`

export const PokemonContainer = styled.View`
    align-self: center;
    height: 115px;
    padding: 20px;
    margin: 10px 0;

    margin-top: 90px;

    background: rgba(0, 0, 0, 0);
    border-radius: 10px;
`

export const PokeTypesContainer = styled.View`
    flex-direction: row;
    width: 80%;
    margin-top: 5px;
`

export const PokemonName = styled.Text`
    /* Application Title */

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;

    /* Text / White */

    color: #ffffff;
`

export const PokemonNumber = styled.Text`
    /* Filter Title */

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    /* Text / Number */

    color: rgba(23, 23, 27, 0.6);
`

export const DetailsContent = styled.View`
    flex: 1;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background: #ffffff;

    padding: 40px;
`

export const ContentScrollable = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
`

export const StatsTitle = styled.Text`
    /* Filter Title */

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    /* Type / Grass */

    color: ${(props: { color: string }) => props.color};

    /* Inside Auto Layout */

    flex: none;
    align-self: flex-start;
`

export const StatsListContainer = styled.View`
    margin-top: 20px;
    width: 100%;
`

export const StatsRow = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const StatsName = styled.Text`
    /* Pokemon Type */

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;

    /* Text / Black */

    color: #17171b;

    /* Inside Auto Layout */

    flex: none;
    align-self: center;
    margin: 10px 0px;
`

export const StatsValue = styled.Text`
    /* Description */

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    text-align: right;

    /* Text / Gray */

    color: #747476;

    /* Inside Auto Layout */

    flex: none;
    align-self: center;
    margin: 10px 0px;
`

export const AbilitiesTitle = styled.Text`
    /* Filter Title */

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    margin-top: 20px;
    /* identical to box height */

    /* Type / Grass */

    color: ${(props: { color: string }) => props.color};

    /* Inside Auto Layout */

    flex: none;
    align-self: flex-start;
`
