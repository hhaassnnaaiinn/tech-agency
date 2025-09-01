import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SANITY_CONFIG } from './constants'

export const client = createClient({
  projectId: SANITY_CONFIG.projectId,
  dataset: SANITY_CONFIG.dataset,
  apiVersion: SANITY_CONFIG.apiVersion,
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => {
  if (!source) return builder.image('')
  return builder.image(source)
}
