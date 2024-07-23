<script>
  import { codeToHtml } from 'shiki'

  const options = {
    lang: 'javascript',
    theme: 'vitesse-light'
  }

  let { code } = $props()

  let output = $state('')

  $effect(async () => {
    output = await codeToHtml(code, options)
  })
</script>

{@html output}
