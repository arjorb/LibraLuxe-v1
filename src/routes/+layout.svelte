<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<main class="max-w-6xl mx-auto my-5">
	<Navbar />
	<main class="my-28">
		<div class="flex items-center justify-between item">
			<h1 class="my-8 text-2xl font-semibold text-gray-700">Good Morning, John</h1>
			<button class="w-10 h-auto p-2 text-white rounded-full bg-fuchsia-600">+</button>
		</div>

		<ul class="flex gap-2 text-sm font-semibold">
			<li><a href="/">All Books</a></li>
			<li><a href="/">Bookmark</a></li>
		</ul>
		<slot />
	</main>
</main>
