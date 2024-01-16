<script>
	export let data;
	import BookCard from '../components/BookCard.svelte';
</script>

<main class="">
	<BookCard />
	<!-- {#each data.books as book, index (book.id)}
		<p class="text-2xl text-blue-400">Title: {book.title}</p>
		<p>{book.description}</p>
	{/each} -->
</main>
