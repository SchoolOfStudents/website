<div class="container">
	<!-- Left navbar -->
	<div class="navbar-div">
		<div class="navbar-alert" id="navbar-left-alert" />
		<nav class="navbar" id="navbar-left">
			<slot name="navbar-left" />
		</nav>
	</div>

	<!-- Content -->
	<div class="content">
		<div class="content-box">
			<slot />
		</div>
	</div>

	<!-- Right navbar -->
	<div class="navbar-div">
		<div
			class="navbar-alert"
			id="navbar-right-alert"
			style="right: 0; width: 40px; transform: translateX(50%);"
		/>
		<nav class="navbar" id="navbar-right">
			<slot name="navbar-right" />
		</nav>
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: space-between;
	}

	.navbar-div {
		width: auto;
		background-color: var(--navbar-bg-color);
		height: 100vh;
	}

	.navbar {
		width: var(--navbar-width);
		background-color: var(--navbar-bg-color);
		height: 100vh;
		opacity: 1;
		transition:
			opacity 0.5s ease,
			width 0.5s ease;
		overflow: hidden;
	}

	.navbar-alert {
		position: absolute;
		width: var(--alert-width);
		background-color: transparent;
		height: 100vh;
	}

	.content {
		flex-grow: 1;
		text-align: center;
		padding: 20px;
		background-color: var(--content-bg-color);
	}

	.content-box {
		max-width: 700px;
		margin: 0 auto;
	}

	@media screen and (max-width: 800px) {
		#navbar-right {
			opacity: 0;
			width: 0;
		}

		#navbar-right-alert:hover + #navbar-right,
		#navbar-right:hover {
			opacity: 1;
			width: var(--navbar-width);
		}
	}

	@media screen and (max-width: 600px) {
		#navbar-left {
			opacity: 0;
			width: 0;
		}

		#navbar-left-alert:hover + #navbar-left,
		#navbar-left:hover {
			opacity: 1;
			width: var(--navbar-width);
		}
	}
</style>
