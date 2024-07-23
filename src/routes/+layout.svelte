<script>
  import './global.css'
</script>

<main>
  <slot/>
</main>

<style>
  main {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  :global(.shiki.vitesse-light) {
    background-color: transparent !important;
  }
</style>
