import type { AtlasSearchResponse } from '~~/types/api'
import { games } from '~~/types/game'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const params = {
    limit: '20',
  }
  const url = createAtlasUrl({ ...params, ...query })

  const data = await $fetch<AtlasSearchResponse>(url.toString())
  return games.parse(data.games)
})
