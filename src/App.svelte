<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";

  import Home from "./routes/Home.svelte";

  export let url = "";
</script>

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
  </nav>
  <div>
    <Route path="/" component={Home} />
  </div>
</Router>
