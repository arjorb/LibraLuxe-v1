<script>
	export let data;
	import BookCard from '../components/BookCard.svelte';
</script>

<main class="flex flex-wrap justify-between">
	{#each data.books as book, index (book.id)}
		<BookCard {...book} />
	{/each}
</main>
