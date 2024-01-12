<script>
	import { Text, Stack } from '@svelteuidev/core';
	import Icon from '@iconify/svelte';

	import logo from '$img/favicon.png';
	import profile from '$img/favicon.png';

	import NavLink from './NavLink.svelte';
</script>

<Stack>
	<div class="main">
		<a href="/">
			<div class="logo">
				<img src={logo} alt="logo" />
				<p>School of Students</p>
			</div>
		</a>

		<div class="sidebar">
			<NavLink path="/search">
				<Icon icon="ic:sharp-search" width="25px" height="25px" style="margin: 10px" />
				<p style="margin: 0">Search</p>
			</NavLink>

			<NavLink path="/courses">
				<Icon icon="ic:baseline-dashboard" width="25px" height="25px" style="margin: 10px" />
				<p style="margin: 0">Courses</p>
			</NavLink>

			<NavLink path="/created">
				<Icon icon="ic:baseline-plus" width="25px" height="25px" style="margin: 10px" />
				<p style="margin: 0">Created</p>
			</NavLink>

			<NavLink path="/settings">
				<Icon icon="ic:baseline-settings" width="25px" height="25px" style="margin: 10px" />
				<p style="margin: 0">Settings</p>
			</NavLink>
		</div>

		<div class="profile">
			<div class="profile-pic">
				<img src={profile} alt="Profile Picture" aria-hidden="true" />
			</div>

			<div class="user-info">
				<p class="username">Leonardo Saurwein</p>
				<p class="email">leonardo@saurwein.ch</p>
			</div>
		</div>
	</div>
</Stack>

<style>
	.main {
		padding: 5px;
	}

	/* Logo */
	.logo {
		display: inline-flex;
		align-items: center;
		margin-bottom: 20px;
		padding: 10px;
	}

	.logo img {
		max-width: 40px;
		max-height: 40px;
		width: 100%;
		height: 100%;
		border-radius: 30%;
		margin-right: 10px;
	}

	.logo p {
		font-size: 20px;
		font-weight: 700;
		color: #fff;
		text-align: center;
		margin: 0;
		font-family: 'Caveat', cursive;
	}

	/* Sidebar */
	.sidebar {
		display: flex;
		flex-direction: column;
		color: #ffffff;
		padding: 0px;
		width: auto;
		border-radius: 8px;
		font-family: sans-serif;
		font-size: 16px;
		line-height: 24px;
	}

	/* Profile pic */
	.profile {
		position: absolute;
		bottom: 10px;
		left: 10px;

		justify-content: center;
		padding: 10px;
		display: inline-flex;
		align-items: center;
	}

	.profile-pic {
		margin-right: 10px;
	}

	.profile-pic img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 2px solid white;
	}

	.user-info {
		text-align: left;
		color: #fff;
	}

	.username {
		font-size: 16px;
		font-weight: bold;
		margin: 0;
	}

	.email {
		font-size: 12px;
		margin: 0;
	}
</style>
