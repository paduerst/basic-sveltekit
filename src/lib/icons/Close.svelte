<script>
	export let rightAlign = false;
</script>

<button on:click class:left={!rightAlign} class:right={rightAlign}>
	<svg width="32" height="32" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
		<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
	</svg>
</button>

<style>
	svg {
		min-height: 24px;
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
		left: 0;
	}

	.right {
		right: 0;
	}

	button:hover {
		color: #fff;
		cursor: pointer;
	}
</style>