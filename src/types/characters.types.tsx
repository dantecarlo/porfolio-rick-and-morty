export interface ICharacterAPI {
  data: IData
  status: number
  statusText: string
  headers: ICharacterAPIHeaders
  config: IConfig
  request: Request
}

export interface IConfig {
  transitional: ITransitional
  transformRequest: null[]
  transformResponse: null[]
  timeout: number
  xsrfCookieName: string
  xsrfHeaderName: string
  maxContentLength: number
  maxBodyLength: number
  headers: IConfigHeaders
  method: string
  url: string
}

export interface IConfigHeaders {
  Accept: string
}

export interface ITransitional {
  silentJSONParsing: boolean
  forcedJSONParsing: boolean
  clarifyTimeoutError: boolean
}

export interface IData {
  info: IInfo
  results: ICharacter[]
}

export interface IInfo {
  count: number
  pages: number
  next: string
  prev: null
}

export interface ICharacter {
  id: number
  name: string
  status: StatusType
  species: SpeciesType
  type: string
  gender: GenderType
  origin: Location
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}

export type GenderType = 'Female' | 'Male' | 'unknown'

export interface Location {
  name: string
  url: string
}

export type SpeciesType = 'Alien' | 'Human'

export type StatusType = 'Alive' | 'Dead' | 'unknown'

export interface ICharacterAPIHeaders {
  'cache-control': string
  'content-length': string
  'content-type': string
  expires: string
}

export interface ICharacterCard {
  character: ICharacter
  gridArea: number
}

export interface IStyledCharacterCardWrapper {
  gridArea: number
}
