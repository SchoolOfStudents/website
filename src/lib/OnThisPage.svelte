<script>
	export let sections;

	function scrollTo(section) {
		if (typeof section === 'number') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		} else {
			section.ref.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	}
</script>

<nav>
	{#each sections as section}
		<button on:click={() => scrollTo(section)}>
			{section.text}
		</button>
	{/each}
	<hr />
	<button class="back-to-top" on:click={() => scrollTo(0)}>Back to top</button>
</nav>

<!-- Simulated content sections for the example -->

<style>
	nav {
		height: 100vh;
		padding: 5px;
		padding-top: 50px;
		position: fixed;
		width: var(--navbar-width);
	}

	nav hr {
		border: none;
		border-top: 1px solid #fff;
		margin: 5px 120px 5px 20px;
	}

	nav button {
		background-color: transparent;
		border: none;
		color: #fff;
		font-size: 14px;
		font-weight: 700;
		padding: 10px 20px;
		width: 80%;
		text-align: left;
		cursor: pointer;
	}

	nav button:hover {
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 8px;
	}

	.back-to-top {
		font-size: 12px;
		padding-left: 20px;
	}
</style>
