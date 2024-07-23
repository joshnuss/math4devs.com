<script>
  import './global.css'
</script>

<svelte:head>
  <meta
    property="og:image"
    content="https://image.social/get?url=math4devs.com/" />
</svelte:head>

<main>
  <slot/>
</main>

<footer>
  Created by <a href="https://x.com/joshnuss">Joshua Nussbaum</a>
</footer>

<style>
  :global(body) {
    padding: 6rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    place-items: center;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  :global(.shiki.vitesse-light) {
    background-color: transparent !important;
  }
</style>
