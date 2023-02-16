import { mapValues } from 'lodash-es'
import { fields as fieldsList } from '~~/constants/fields'

export function createUrl(
  uri: string,
  params: Record<string, string | number>,
) {
  const url = new URL(uri)
  const mappedParams = mapValues(params, value => value.toString())
  const urlParams = new URLSearchParams(mappedParams)
  url.search = urlParams.toString()
  return url
}

export function createAtlasUrl(
  params: Record<string, string | number>,
  fields?: string) {
  const runtimeConfig = useRuntimeConfig()
  return createUrl(
    runtimeConfig.public.atlasURI, {
      ...params,
      client_id: runtimeConfig.atlasClientId,
      fields: fields || fieldsList.join(','),
    })
}
