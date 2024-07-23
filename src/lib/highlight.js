import { createHighlighter } from 'shiki'

const theme = 'vitesse-light'
const lang = 'javascript'

let highlighter = null

const options = {
  lang,
  theme
}

export async function highlight(code) {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: [theme],
      langs: [lang]
    })
  }

  return await highlighter.codeToHtml(code, options)
}
