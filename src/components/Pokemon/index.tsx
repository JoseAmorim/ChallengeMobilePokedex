import React, { memo } from 'react'

import {
    Container,
    PokeName,
    PokeBallImage,
    PokeInformationsContainer,
} from './styles'
import colors from '../../constants/colors'
import { capitalize } from '../../utils/functions'

interface PokemonProps {
    name: string
    url: string
    handleProfile: (url: string) => void
}

const Pokemon: React.FC<PokemonProps> = ({
    name,
    url,
    handleProfile,
}: PokemonProps) => {
    return (
        <Container
            onPress={() => handleProfile(url)}
            color={colors.backgrounds.dark}>
            <PokeInformationsContainer>
                <PokeName>{capitalize(name)}</PokeName>
            </PokeInformationsContainer>
            <PokeBallImage
                source={require('../../assets/Pokeball_Pokemon.png')}
            />
        </Container>
    )
}

export default memo(Pokemon)
