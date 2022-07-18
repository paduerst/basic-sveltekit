<script>
	import Logo from './Logo.svelte';

	export let color = "";
</script>

<a class="logoWrapper" sveltekit:prefetch href="/">
	<Logo {color} />
</a>

<style>
	.logoWrapper {
		display: inline-block;
		vertical-align: middle;
		position: relative;
		top: 0;
		margin: auto;
		margin-top: 8px;
		padding: 0px;
		border: none;
		background: none;
	}
</style>