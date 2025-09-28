import { toHTML, type Components } from '@portabletext/to-html'
import imageUrlBuilder from '@sanity/image-url'
import { sanity } from './sanity'
import { slugify } from './slug'

const builder = imageUrlBuilder(sanity)
const urlFor = (src: any) => {
  try { return builder.image(src).auto('format').fit('max').width(1200).url() } catch { return '' }
}

export function renderPortable(value: any[] = []) {
  const components: Components = {
    marks: {
      link: ({ children, value }) => {
        const href = value?.href || '#'
        const ext = /^https?:\/\//.test(href)
        return `<a href="${href}"${ext ? ' target="_blank" rel="noopener"' : ''}>${children}</a>`
      },
    },
    block: {
      h1: ({ children, value }) => {
        const text = (value?.children || []).map((c: any) => c.text || '').join(' ')
        const id = slugify(text)
        return `<h1 id="${id}"><a class="anchor" href="#${id}" aria-label="Link to section">#</a>${children}</h1>`
      },
      h2: ({ children, value }) => {
        const text = (value?.children || []).map((c: any) => c.text || '').join(' ')
        const id = slugify(text)
        return `<h2 id="${id}"><a class="anchor" href="#${id}" aria-label="Link to section">#</a>${children}</h2>`
      },
      h3: ({ children, value }) => {
        const text = (value?.children || []).map((c: any) => c.text || '').join(' ')
        const id = slugify(text)
        return `<h3 id="${id}"><a class="anchor" href="#${id}" aria-label="Link to section">#</a>${children}</h3>`
      },
      h4: ({ children, value }) => {
        const text = (value?.children || []).map((c: any) => c.text || '').join(' ')
        const id = slugify(text)
        return `<h4 id="${id}"><a class="anchor" href="#${id}" aria-label="Link to section">#</a>${children}</h4>`
      },
      blockquote: ({ children }) => `<blockquote>${children}</blockquote>`,
      normal:    ({ children }) => `<p>${children}</p>`,
    },
    list: {
      bullet: ({ children }) => `<ul>${children}</ul>`,
      number: ({ children }) => `<ol>${children}</ol>`,
    },
    listItem: {
      bullet: ({ children }) => `<li>${children}</li>`,
      number: ({ children }) => `<li>${children}</li>`,
    },
    types: {
      image: ({ value }) => {
        const src = urlFor(value)
        return src
          ? `<figure><img src="${src}" alt="${value?.alt || ''}" loading="lazy" decoding="async"></figure>`
          : ''
      },

      callout: ({ value }) =>
        `<aside class="callout" data-tone="${value?.tone || 'note'}">
           ${value?.title ? `<strong class="callout-title">${value.title}</strong>` : ''}
           ${value?.body ? renderPortable(value.body) : ''}
         </aside>`,

      step: ({ value }) =>
        `<div class="step">
           ${value?.label ? `<h4 class="step-title">${value.label}</h4>` : ''}
           ${value?.body ? renderPortable(value.body) : ''}
         </div>`,

      steps: ({ value }) => {
        const items = (value?.items || [])
          .map((s: any, i: number) => `<li class="step-item" data-step="${i + 1}">${renderPortable([s])}</li>`)
          .join('')
        return `<ol class="steps">${items}</ol>`
      },

      prosCons: ({ value }) => {
        const pros = (value?.pros || []).map((p: any) => `<li>${p}</li>`).join('')
        const cons = (value?.cons || []).map((c: any) => `<li>${c}</li>`).join('')
        return `<div class="proscons">
                  <div class="pros"><h4>Pros</h4><ul>${pros}</ul></div>
                  <div class="cons"><h4>Cons</h4><ul>${cons}</ul></div>
                </div>`
      },

      faq: ({ value }) => {
        const items = (value?.items || [])
          .map((f: any) => {
            const ans = renderPortable(f?.a || [])
            const q = f?.q || ''
            const id = slugify(q)
            return `<details class="faq" id="${id}"><summary>${q}</summary><div>${ans}</div></details>`
          }).join('')
        return `<section class="faq-block">${items}</section>`
      },

      faqItem: ({ value }) =>
        `<details class="faq"><summary>${value?.q || ''}</summary><div>${renderPortable(value?.a || [])}</div></details>`,
    },
  }

  return toHTML(value as any, { components })
}
