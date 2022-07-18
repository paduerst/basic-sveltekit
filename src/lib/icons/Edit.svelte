<script>
	export let rightAlign = false;
	export let alert = false;
</script>

<button on:click class:left={!rightAlign} class:right={rightAlign} class:alert>
	{#if alert}
		<svg style="padding: 2px;" width="28" height="28" fill="currentColor" class="bi bi-exclamation-square-fill" viewBox="0 0 16 16">
			<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
		</svg>
	{:else}
		<svg width="32" height="32" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
			<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
			<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
		</svg>
	{/if}
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

	button.alert {
		color: #ddb74e;
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

	button:active {
		color: #aaa;
	}
</style>