<script>
	import { Router, Link, Route } from 'svelte-navigator';
	import Home from './routes/home/home.svelte';
	import About from './routes/about/about.svelte';
	import Dashboard from './routes/dashboard/dashboard.svelte';
	import NotFound from './routes/notFound.svelte';
</script>

<!-- Router -->
<Router>
	<section class="wrapper">
		<nav>
			<p class="nav-title">Doekoe Checker</p>
			<div class="nav-links">
				<Link to="/">Home</Link>
				<Link to="about">About</Link>
				<Link to="dashboard">Dashboard</Link>
			</div>
		</nav>
		<div class="content">
			<Route path="/">
				<Home />
			</Route>
			<Route path="/about">
				<About />
			</Route>
			<Route path="/dashboard">
				<Dashboard />
			</Route>
			<Route path="">
				<NotFound />
			</Route>
		</div>
	</section>
</Router>

<style lang="scss">
	@import './assets/styles/main.style';
	.wrapper {
		color: $primary-text-color;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	.content {
		padding: 0.5rem;
		flex-grow: 1;
		font-family: $secondary-font;
		margin: 0;
		width: 100vw;
		background-color: $primary;
	}
	.primary-text {
		font-family: $primary-font;
	}

	nav {
		padding: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: auto;
		background-color: $secondary;
		.nav-title {
			font-family: $primary-font;
			font-size: 4rem;
		}
		.nav-links {
			align-items: center;
		}
	}
</style>
