<script>
  import './global.css'
</script>

<main>
  <slot/>
</main>

<style>
  main {
    padding: 6rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  :global(.shiki.vitesse-light) {
    background-color: transparent !important;
  }
</style>
