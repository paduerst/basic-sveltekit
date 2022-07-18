<script>
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import CloseIcon from '../icons/Close.svelte';

	export let show = false;
	export let rightAlign = false;

	let flyParams = {
		duration: 300,
		easing: cubicInOut,
	};
	if (rightAlign) {
		flyParams.x = 400;
	} else {
		flyParams.x = -400;
	}
</script>

{#if show}
	<div class="backdrop" transition:fade={{duration: 300}} on:click|self>
	</div>
	<aside class="sidebar" transition:fly={flyParams} class:left={!rightAlign} class:right={rightAlign}>
		<div id="btnWrapper">
			<CloseIcon on:click {rightAlign} />
		</div>
		<div id="contentWrapper">
			<slot></slot>
		</div>
	</aside>
{/if}

<style>
	.backdrop {
		position: absolute;
		z-index: 98;
		width: 100%;
		height: 100%;
		background: rgba(90,90,90,0.3);
	}

	aside {
		position: absolute;
		z-index: 99;
		top: 0;
		width: 80%;
		max-width: 400px;
		height: 100%;
		overflow-x: hidden;
		overflow-y: auto;
		text-align: left;
		background: #1a1a1a;
		color: #ccc;
	}

	.left {
		left: 0;
		border-right: 1px solid rgb(0,0,0);
	}

	.right {
		right: 0;
		border-left: 1px solid rgb(0,0,0);
	}

	#btnWrapper {
		height: 60px;
	}

	#contentWrapper {
		padding: 0px 16px 16px 16px;
	}
</style>