import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'

import {
    Container,
    PokemonList,
    Title,
    TitleContainer,
    SubTitle,
    SearchInput,
    PokeballImage,
} from './styles'
import Pokemon from '../../components/Pokemon'
import { StackNavigator } from 'src/navigator'
import { Pokemon as PokemonInterface } from '../../utils/types'

interface HomeProps {
    navigation: StackNavigator
}

interface PokemonsResponse {
    count: number
    next: string | null
    previous: string | null
    results: PokemonInterface[]
}

const Home: React.FC<HomeProps> = ({ navigation }: HomeProps) => {
    const [search, setSearch] = useState('')
    const [pokemons, setPokemons] = useState<PokemonInterface[]>([])
    const [fullPokemons, setFullPokemons] = useState<PokemonInterface[]>([])

    useEffect(() => {
        const getPokemons = async (): Promise<void> => {
            const response: AxiosResponse<PokemonsResponse> = await axios.get(
                'https://pokeapi.co/api/v2/pokemon?limit=100',
            )

            const { results } = response.data

            setPokemons(results)
            setFullPokemons(results)
        }

        getPokemons()
    }, [])

    const handleProfile = (url: string): void => {
        navigation.navigate('Profile', {
            url,
        })
    }

    const handleSearch = (text: string): void => {
        const filteredPokemons = fullPokemons.filter((item) => {
            const textSearched = text.toLowerCase()

            const textToSearch = item.name.toLowerCase()

            return textToSearch.indexOf(textSearched) > -1
        })

        setPokemons(filteredPokemons)
        setSearch(text)
    }

    return (
        <Container>
            <PokeballImage source={require('../../assets/Pokeball.png')} />
            <TitleContainer>
                <Title>Pokédex</Title>
                <SubTitle>
                    Search for Pokémon by name or using the National Pokédex
                    number.
                </SubTitle>
                <SearchInput
                    value={search}
                    onChangeText={handleSearch}
                    placeholder="What Pokémon are you looking for?"
                />
            </TitleContainer>
            <PokemonList
                extraData={fullPokemons}
                data={pokemons}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <Pokemon {...item} handleProfile={handleProfile} />
                )}
            />
        </Container>
    )
}

export default Home
