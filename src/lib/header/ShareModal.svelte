<script>
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';

	import CloseIcon from '../icons/Close.svelte';

  export let show = false;
  export let urlCopied = false;

  const dispatch = createEventDispatcher();

	const copyUrl = () => {
		navigator.clipboard.writeText(`${$page.url}`);
    dispatch('copiedUrl', {});
	};
</script>

{#if show}
  <div class="backdrop" transition:fade={{duration: 300}} on:click|self>
    <div class="modal">
      <div class="modal-header">
        <span>Share Your Dragon</span>
        <CloseIcon rightAlign={true} on:click />
      </div>
      <div class="modal-body">
        <span>Copy the URL to share your dragon!</span>
      </div>
      <div class="modal-footer">
        {#if urlCopied}
          <button class="success">URL Copied!</button>
        {:else}
          <button class="clickable" on:click={copyUrl}>Copy URL</button>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .backdrop{
    position: absolute;
    z-index: 98;
    width: 100%;
    height: 100%;
    background: rgba(90,90,90,0.3);
  }

  .modal{
    position: absolute;
    z-index: 99;
    left: 50%;
    top: 20%;
    margin-top: 60px;
    transform: translate(-50%, -50%);
    padding: 10px;
    border: 1px solid #000;
    border-radius: 10px;
    height: 30%;
    width: 70%;
    max-width: 400px;
    max-height: 200px;
    text-align: center;
    color: #ccc;
    background: #1a1a1a;
    font-size: 1rem;
  }

  .modal-header {
    /* background-color: aqua; */
    height: 25%;
  }

  .modal-header span {
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: top;
    margin-left: 8px;
    margin-top: 8px;
    font-size: 1.5rem;
  }

  .modal-body {
    /* background-color: indianred; */
    height: 40%;
  }

  .modal-body span {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-body::before, .modal-footer::before {
    position: relative;
    top: 0;
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #444;
  }

  .modal-footer {
    /* background-color: aqua; */
    height: 35%;
  }

  .modal-footer button {
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
    background-color: #ccc;
    font-size: 1.2rem;
    padding: 8px;
    border-radius: 5px;
		border: none;
  }

  .modal-footer button.clickable:hover {
    background-color: #fff;
    cursor: pointer;
  }

  .modal-footer button.clickable:active {
    background-color: #aaa;
  }

  .modal-footer button.success {
    background-color: #9f9;
  }
</style>