export enum PokeTypes {
    bug = 'bug',
    dark = 'dark',
    dragon = 'dragon',
    electric = 'electric',
    fairy = 'fairy',
    fighting = 'fighting',
    fire = 'fire',
    flying = 'flying',
    ghost = 'ghost',
    grass = 'grass',
    ground = 'ground',
    ice = 'ice',
    normal = 'normal',
    poison = 'poison',
    psychic = 'psychic',
    rock = 'rock',
    steel = 'steel',
    water = 'water',
}

export interface Pokemon {
    name: string
    url: string
}

export interface PokemonDetails {
    abilities: Array<{
        ability: {
            name: string
            url: string
        }
        is_hidden: boolean
        slot: number
    }>
    base_experience: 64
    forms: Array<{
        name: string
        url: string
    }>
    game_indices: Array<{
        game_index: number
        version: {
            name: string
            url: string
        }
    }>
    stats: Array<{
        base_stat: number
        effort: number
        stat: {
            name: string
            url: string
        }
    }>
    height: number
    held_items: Array<any>
    id: number
    is_default: boolean
    location_area_encounters: string
    types: Array<{
        slot: number
        type: {
            name: PokeTypes
            url: string
        }
    }>
    name: string
}
