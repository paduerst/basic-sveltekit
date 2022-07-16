<script>
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';

	export let rightAlign = false;

	const copyUrl = () => {
		navigator.clipboard.writeText(`${$page.url}`);
	};
</script>

<button on:click={copyUrl} class:left={!rightAlign} class:right={rightAlign} transition:fade>
	<svg width="28" height="28" fill="currentColor" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
		<path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
		<path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
	</svg>
</button>

<style>
	svg {
		min-height: 24px;
		padding: 1px 2px 3px 2px;
	}

	button,
	svg {
		display: inline-block;
		vertical-align: middle;
	}

	button {
		position: absolute;
		top: 0;
		margin: 8px;
		padding: 6px;
		border: none;
		background: none;
		color: #ccc;
	}

	.left {
		left: 60px;
	}

	.right {
		right: 60px;
	}

	button:hover {
		color: #fff;
		cursor: pointer;
	}
</style>