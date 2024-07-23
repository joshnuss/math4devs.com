<script>
  import './global.css'
</script>

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
