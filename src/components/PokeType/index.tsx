import React, { memo } from 'react'

import { Container, PokeTypeText } from './styles'
import colors from '../../constants/colors'
import { PokeTypes } from '../../utils/types'

interface PokeTypeProps {
    type: PokeTypes
}

const PokeType: React.FC<PokeTypeProps> = ({ type }: PokeTypeProps) => {
    return (
        <Container color={colors[type]}>
            <PokeTypeText>{type}</PokeTypeText>
        </Container>
    )
}

export default memo(PokeType)
