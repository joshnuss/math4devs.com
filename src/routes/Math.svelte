<script>
  import katex from 'katex'

  const options = { displayMode: true, output: 'html' }

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
