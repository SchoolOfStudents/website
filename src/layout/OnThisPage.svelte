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

	/* 

    		<OnThisPage slot="navbar-right" />
    	let sections = [
		{ text: 'Create database', ref: null },
		{ text: 'Create collection', ref: null },
		{ text: 'Create documents', ref: null },
		{ text: 'List documents', ref: null }
	];
    					{#each sections as section}
						<section
							bind:this={section.ref}
							style="height: 500px; border: 1px solid #ccc; margin-top: 10px;"
						>
							<h2>{section.text}</h2>
						</section>
					{/each}
    */
</script>

<nav>
	<div class="nav-content">
		<p>On this page:</p>
		<hr />
		{#each sections as section}
			<button on:click={() => scrollTo(section)}>
				{section.text}
			</button>
		{/each}
		<hr />
		<button class="back-to-top" on:click={() => scrollTo(0)}>Back to top</button>
	</div>
</nav>

<!-- Simulated content sections for the example -->

<style>
	nav {
		height: 100vh;
		padding: 5px;
		padding-top: 60px;
		position: fixed;
		width: var(--navbar-width);
	}

	.nav-content {
		position: sticky;
		top: 50px;
		border-left: 1px solid #fff;
		padding: 0px 20px;
		width: 80%;
	}

	nav hr {
		border: none;
		border-top: 1px solid #fff;
		margin: 5px 100px 5px 10px;
	}

	nav button {
		background-color: transparent;
		border: none;
		color: #fff;
		font-size: 14px;
		font-weight: 600;
		padding: 10px 10px;
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
	}

	nav p {
		font-size: 12px;
		font-weight: 600;
		color: #fff;
		margin: 0;
		padding: 10px;
	}
</style>
