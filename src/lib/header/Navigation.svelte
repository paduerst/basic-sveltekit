<script>
	const links = [
		{href: "/", desc: "Home"},
		{href: "/about", desc: "About"},
	];
</script>

<nav>
	{#each links as link}
		<a on:click|self sveltekit:prefetch href={link.href}>{link.desc}</a>
	{/each}
</nav>

<style>
	a {
		position: relative;
		padding: 1rem 0px 1rem 0px;
		text-decoration: none;
		font-size: 2rem;
		line-height: 2rem;
		display: block;
		color: #ccc;
	}

	a:hover {
		color: #fff;
	}

	a:before {
		position: absolute;
		top: 0;
		content: "";
		display: block;
		width: 100%;
		height: 1px;
		background-color: #555;
	}

	a:last-of-type::after {
		position: absolute;
		top: 4rem;
		content: "";
		display: block;
		width: 100%;
		height: 1px;
		background-color: #555;
	}
</style>