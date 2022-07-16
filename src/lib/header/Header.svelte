<script>
	import { page } from '$app/stores';
  import Sidebar from './Sidebar.svelte';
  import Navigation from './Navigation.svelte';
  import Editor from './Editor.svelte';

  import Hamburger from '../icons/Hamburger.svelte';
  import EditorIcon from '../icons/Edit.svelte';
  import ShareIcon from '../icons/Share.svelte';
  import Logo from '../icons/LogoButton.svelte';

  let showNavigation = false;
  let showEditor = false;

  const toggleNavigation = () => {
    if (showNavigation) {
      showNavigation = false;
    } else {
      showEditor = false;
      showNavigation = true;
    }
  }

  const toggleEditor = () => {
    if (showEditor) {
      showEditor = false;
    } else {
      showNavigation = false;
      showEditor = true;
    }
  }
</script>

<Sidebar bind:show={showNavigation} on:click={toggleNavigation} >
  <Navigation on:click={toggleNavigation} />
</Sidebar>

<Sidebar bind:show={showEditor} on:click={toggleEditor} rightAlign={true} >
  <Editor />
</Sidebar>

<header>
  <Hamburger on:click={toggleNavigation} />

  <Logo color={""} />

  {#if $page.url.pathname === '/'}
    <!-- TODO: Check that dragon stat block exists before displaying this -->
    <ShareIcon rightAlign={true} />
  {/if}
  <EditorIcon on:click={toggleEditor} rightAlign={true} />
</header>



<style>
  header {
    height: 60px;
    width: 100%;
    background-color: #1a1a1a;
    border-bottom: 1px solid rgb(0, 0, 0);
  }
</style>
