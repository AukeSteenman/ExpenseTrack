<script>
	import { Router, Link, Route } from "svelte-navigator";
	import Home from "./routes/home.svelte";
  import About from "./routes/about.svelte";
  import NotFound from "./routes/notFound.svelte";
</script>

<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="about">About</Link>
	</nav>
	<div>
		<Route path="/">
			<Home />
		</Route>
    <Route path="/about">
			<About />
		</Route>
    <Route path="">
			<NotFound />
		</Route>
	</div>
</Router>
