import React, { useEffect, useState } from 'react'

import {
    Container,
    PokemonTitle,
    PokemonName,
    PokemonContainer,
    PokemonNumber,
    PokeTypesContainer,
    DetailsContent,
    StatsTitle,
    StatsListContainer,
    StatsRow,
    StatsName,
    StatsValue,
    ContentScrollable,
    AbilitiesTitle,
} from './styles'
import Axios from 'axios'
import { RootParamList } from '../../navigator'
import { RouteProp } from '@react-navigation/native'
import { PokemonDetails } from 'src/utils/types'
import colors from '../../constants/colors'
import { capitalize } from '../../utils/functions'
import PokeType from '../../components/PokeType'

interface ProfileProps {
    route: RouteProp<RootParamList, 'Profile'>
}

const Profile: React.FC<ProfileProps> = ({ route }: ProfileProps) => {
    const [details, setDetails] = useState<PokemonDetails | null>(null)

    useEffect(() => {
        const getDetails = async (): Promise<void> => {
            const { url } = route.params

            const response = await Axios.get(url)

            setDetails(response.data)
        }

        getDetails()
    }, [route.params])

    return (
        <Container
            color={
                details
                    ? colors.backgrounds[
                          details?.types[details.types.length - 1].type.name
                      ]
                    : '#fff'
            }>
            <PokemonTitle>{details?.name.toUpperCase()}</PokemonTitle>
            <PokemonContainer>
                <PokemonNumber>#{details?.id}</PokemonNumber>
                <PokemonName>{details && capitalize(details.name)}</PokemonName>
                <PokeTypesContainer>
                    {details &&
                        details.types.length > 0 &&
                        details.types.map((item) => {
                            return (
                                <PokeType
                                    key={`${item.type.name}-${Math.random()}`}
                                    type={item.type.name}
                                />
                            )
                        })}
                </PokeTypesContainer>
            </PokemonContainer>
            <DetailsContent>
                <ContentScrollable>
                    <StatsTitle
                        color={
                            details
                                ? colors[
                                      details?.types[details.types.length - 1]
                                          .type.name
                                  ]
                                : '#fff'
                        }>
                        Base Stats
                    </StatsTitle>
                    <StatsListContainer>
                        {details &&
                            details.stats.length > 0 &&
                            details?.stats.map((item) => (
                                <StatsRow>
                                    <StatsName>
                                        {item.stat.name.toUpperCase()}
                                    </StatsName>
                                    <StatsValue>{item.base_stat}</StatsValue>
                                </StatsRow>
                            ))}
                    </StatsListContainer>

                    <AbilitiesTitle
                        color={
                            details
                                ? colors[
                                      details?.types[details.types.length - 1]
                                          .type.name
                                  ]
                                : '#fff'
                        }>
                        Abilities
                    </AbilitiesTitle>
                    <StatsListContainer>
                        {details &&
                            details.abilities.length > 0 &&
                            details?.abilities.map((item) => (
                                <StatsRow>
                                    <StatsName>
                                        {item.ability.name.toUpperCase()}
                                    </StatsName>
                                </StatsRow>
                            ))}
                    </StatsListContainer>
                </ContentScrollable>
            </DetailsContent>
        </Container>
    )
}

export default Profile
