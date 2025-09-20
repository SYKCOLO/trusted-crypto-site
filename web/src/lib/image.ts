import imageUrlBuilder from '@sanity/image-url'
import { sanity } from './sanity'
export const urlFor = (src: any) => imageUrlBuilder(sanity).image(src)
