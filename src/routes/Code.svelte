<script>
  import { highlight } from '$lib/highlight.js'

  let { code } = $props()

  let output = $state('')

  $effect(async () => {
    output = await highlight(code)
  })
</script>

{@html output}
