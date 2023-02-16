import type { Game } from './game'

export interface AtlasSearchResponse {
  games: Game[]
  count: number
}
