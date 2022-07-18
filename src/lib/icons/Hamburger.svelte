<script>
	export let rightAlign = false;
</script>

<button on:click class:left={!rightAlign} class:right={rightAlign}>
	<svg width=32 height=32>
		<line id="top"    x1=0 y1=6  x2=32 y2=6/>
		<line id="middle" x1=0 y1=16 x2=32 y2=16/>
		<line id="bottom" x1=0 y1=26 x2=32 y2=26/>
	</svg>
</button>

<style>
	svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
	}
	
	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out
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

	button:active {
		color: #aaa;
	}
</style>