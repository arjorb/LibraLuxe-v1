<script>
	export let data;
	import BookCard from '../components/BookCard.svelte';
</script>

<main class="my-28">
	<div class="flex items-center justify-between item">
		<h1 class="my-8 text-2xl font-semibold text-gray-700">Good Morning, John</h1>
		<a href="/create" class="w-10 h-auto p-2 text-center text-white rounded-full bg-fuchsia-600"
			>+</a
		>
	</div>

	<ul class="flex gap-2 text-sm font-semibold">
		<li><a href="/">All Books</a></li>
		<li><a href="/">Bookmark</a></li>
	</ul>

	<div class="flex flex-wrap gap-24">
		{#each data.books as book, index (book.id)}
			<BookCard {...book} />
		{/each}
	</div>
</main>
