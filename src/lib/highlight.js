import { createHighlighter } from 'shiki'

const theme = 'vitesse-light'
const lang = 'javascript'

const highlighter = await createHighlighter({
  themes: [theme],
  langs: [lang]
})

const options = {
  lang,
  theme
}

export function highlight(code) {
  return highlighter.codeToHtml(code, options)
}
