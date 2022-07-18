<script>
	import { page } from '$app/stores';
  import Sidebar from './Sidebar.svelte';
  import Navigation from './Navigation.svelte';
  import Editor from './Editor.svelte';
	import ShareModal from './ShareModal.svelte';

  import Hamburger from '../icons/Hamburger.svelte';
  import EditorIcon from '../icons/Edit.svelte';
  import ShareIcon from '../icons/Share.svelte';
  import Logo from '../icons/LogoButton.svelte';

  let showNavigation = false;
  let showEditor = false;
  let showModal = false;
  let urlCopied = false;

  const toggleNavigation = () => {
    if (showNavigation) {
      showNavigation = false;
    } else {
      showEditor = false;
      showModal = false;
      showNavigation = true;
    }
  }

  const toggleEditor = () => {
    if (showEditor) {
      showEditor = false;
    } else {
      showNavigation = false;
      showModal = false;
      showEditor = true;
    }
  }

  const toggleModal = () => {
    if (showModal) {
      showModal = false;
      urlCopied = false; // reset the urlCopied state on close
    } else {
      showNavigation = false;
      showEditor = false;
      showModal = true;
    }
  }
</script>

<Sidebar bind:show={showNavigation} on:click={toggleNavigation} >
  <Navigation on:click={toggleNavigation} />
</Sidebar>

<Sidebar bind:show={showEditor} on:click={toggleEditor} rightAlign={true} >
  <Editor />
</Sidebar>

<ShareModal bind:show={showModal} {urlCopied} on:click={toggleModal} on:copiedUrl={() => {urlCopied = true;}} />

<header>
  <Hamburger on:click={toggleNavigation} />

  <Logo color={""} />

  {#if $page.url.pathname === '/'}
    <!-- TODO: Check that dragon stat block exists before displaying this -->
    <ShareIcon on:click={toggleModal} rightAlign={true} />
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
