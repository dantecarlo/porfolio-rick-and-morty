export interface CharactersApi {
  info: Info
  results: Character[]
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: string
}

export interface Character {
  id: number
  name: string
  status: Status
  species: Species
  type: string
  gender: Gender
  origin: Location
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}

export type Gender = 'Female' | 'Genderless' | 'Male' | 'unknown'

export interface Location {
  name: string
  url: string
}

export type Species = 'Alien' | 'Human' | 'Humanoid' | 'Mythological Creature'

export type Status = 'Alive' | 'Dead' | 'unknown'
