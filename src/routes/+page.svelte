<script>
  import symbols from '../data/symbols.json5'

  import Math from './Math.svelte'
  import Code from './Code.svelte'
</script>

<hgroup>
  <h1>Math4Devs</h1>
  <p>List of mathematical symbols with their JavaScript equivalent.</p>
</hgroup>

<table>
  <thead>
    <tr>
      <th>Symbol</th>
      <th class="left">Name</th>
      <th class="left">Since</th>
      <th>Example</th>
      <th class="left">JavaScript</th>
    </tr>
  </thead>
  <tbody>
    {#each symbols as symbol}
      <tr class:same={symbol.example == symbol.code}>
        <td class="symbol">{symbol.symbol}</td>
        <td class="left">{symbol.name}</td>
        <td class="left">{symbol.since || 'unknown'}</td>
        <td><Math example={symbol.example}/></td>
        <td class="left"><Code code={symbol.code}/></td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  .symbol {
    font-size: 1.7rem;
  }
  .left {
    text-align: left;
  }

  .same td {
    /* background: var(--green-1) */
  }

  tbody tr:nth-child(even) td {
    background-color: var(--surface-2);
  }

  hgroup {
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
      font-size: 1.3rem;
      color: var(--text-2);
    }
  }
</style>
