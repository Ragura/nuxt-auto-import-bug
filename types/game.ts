// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { z } from 'zod'

export const mechanic = z.object({
  id: z.string(),
  url: z.string(),
})
export type Mechanic = z.infer<typeof mechanic>

export const category = z.object({
  id: z.string(),
  url: z.string(),
})
export type Category = z.infer<typeof category>

export const imageGroup = z.object({
  thumb: z.string(),
  small: z.string(),
  medium: z.string(),
  large: z.string(),
  original: z.string(),
})
export type ImageGroup = z.infer<typeof imageGroup>

export const publisher = z.object({
  id: z.string(),
  num_games: z.number(),
  score: z.number(),
  url: z.string(),
  images: imageGroup,
})
export type Publisher = z.infer<typeof publisher>

export const designer = z.object({
  id: z.string(),
  num_games: z.number(),
  score: z.number(),
  game: z.any(),
  url: z.string(),
  images: imageGroup,
})
export type Designer = z.infer<typeof designer>

export const game = z.object({
  id: z.string(),
  name: z.string(),
  year_published: z.number(),
  min_players: z.number(),
  max_players: z.number(),
  player_counts: z.array(z.number()).optional(),
  min_playtime: z.number(),
  max_playtime: z.number(),
  min_age: z.number(),
  description: z.string(),
  faq: z.string(),
  thumb_url: z.string(),
  image_url: z.string(),
  mechanics: z.array(mechanic),
  categories: z.array(category),
  publishers: z.array(publisher),
  designers: z.array(designer),
  primary_publisher: publisher
    .pick({ id: true, url: true })
    .extend({ name: z.string() })
    .optional(),
  primary_designer: designer
    .pick({ id: true, url: true })
    .extend({ name: z.string() })
    .optional(),
  related_to: z.array(z.any()),
  related_as: z.array(z.any()),
  artists: z.array(z.string()),
  names: z.array(z.string()),
  rules_url: z.string().nullable(),
  official_url: z.string().nullable(),
  images: imageGroup,
  description_preview: z.string(),
})
export type Game = z.infer<typeof game>

export const games = z.array(game)
