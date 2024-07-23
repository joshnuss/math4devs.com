<script>
  import katex from 'katex'

  const options = { output: 'mathml' }

  let { example } = $props()
</script>

{@html katex.renderToString(example, options)}
