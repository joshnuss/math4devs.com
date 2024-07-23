<script>
  import symbols from '../data/symbols.json5'

  import Math from './Math.svelte'
  import Code from './Code.svelte'
</script>

<h1>Math4Devs</h1>

<table>
  <thead>
    <tr>
      <th>Symbol</th>
      <th>Name</th>
      <th>Since</th>
      <th>Notation</th>
      <th>JavaScript</th>
    </tr>
  </thead>
  <tbody>
    {#each symbols as symbol}
      <tr>
        <td>{symbol.symbol}</td>
        <td>{symbol.name}</td>
        <td>{symbol.since}</td>
        <td><Math example={symbol.example}/></td>
        <td><Code code={symbol.code}/></td>
      </tr>
    {/each}
  </tbody>
</table>
