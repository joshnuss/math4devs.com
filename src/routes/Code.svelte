<script context="module">
  import { createHighlighter } from 'shiki'

  const theme = 'vitesse-light'
  const lang = 'javascript'

  const options = {
    lang,
    theme
  }

  let highlighter = await createHighlighter({
    themes: [theme],
    langs: [lang]
  })

</script>

<script>
  let { code } = $props()

  let output = $state('')

  $effect(async () => {
    if (!highlighter) return

    output = await highlighter.codeToHtml(code, options)
  })
</script>

{@html output}
