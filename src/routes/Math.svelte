<script>
  import katex from 'katex'

  const options = { output: 'mathml' }

  let { example } = $props()
</script>

<div>
  {@html katex.renderToString(example, options)}
</div>

<style>
  div {
    font-size: 1.4rem;
  }
</style>
