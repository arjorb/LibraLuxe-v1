<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<main class="max-w-6xl mx-auto my-5">
	<Navbar />
	<slot />
</main>
