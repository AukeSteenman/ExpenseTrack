<script>
	import { Router, Link, Route } from 'svelte-navigator';
	import Home from './routes/home/home.svelte';
	import About from './routes/about/about.svelte';
	import Dashboard from './routes/dashboard/dashboard.svelte';
	import NotFound from './routes/notFound.svelte';
</script>

<!-- Router -->
<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="about">About</Link>
		<Link to="dashboard">Dashboard</Link>
	</nav>
	<div class="content-container">
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
</Router>

<style lang="css">
	:root {
		--primary: #e7ffeb;
		--secondary: #d1e8d5;
		--nav-bar-height: 5vh;
	}
	.content-container {
		margin: 0;
		width: 100vw;
		height: calc(100vh - var(--nav-bar-height));
		background-color: var(--primary);
	}
	nav {
		height: var(--nav-bar-height);
		background-color: var(--primary);
	}
</style>
