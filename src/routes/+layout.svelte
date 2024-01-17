<script>
	import '../app.css';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<svelte:head>
	<title>LibraLuxe</title>
</svelte:head>

<main class="max-w-6xl mx-auto my-5">
	<Navbar />
	<slot />
</main>
