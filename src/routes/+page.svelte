<script>
  import symbols from '../data/symbols.json5'
  import katex from 'katex'
</script>

<h1>Math4Devs</h1>

<table>
  <thead>
    <tr>
      <th>Symbol</th>
      <th>Name</th>
      <th>Since</th>
    </tr>
  </thead>
  <tbody>
    {#each symbols as symbol}
      <tr>
        <td>{symbol.symbol}</td>
        <td>{symbol.name}</td>
        <td>{symbol.since}</td>
        <td>{@html katex.renderToString(symbol.example, { output: 'mathml'})}</td>
        <td>{symbol.code}</td>
      </tr>
    {/each}
  </tbody>
</table>
