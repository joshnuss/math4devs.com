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
  @import "open-props/media.min.css";

  :root {
    --display: block;
    --margin: 2rem;
    --place-items: flex-start;

    @media (--sm-n-above) {
    }

    @media (--md-n-above) {
      --display: flex;
    }

    @media (--lg-n-above) {
      --margin: 6rem;
      --place-items: center;
    }
  }


  :global(body) {
    margin: var(--margin);
    display: var(--display);
    flex-direction: column;
    gap: 2rem;
    place-items: var(--place-items);
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
