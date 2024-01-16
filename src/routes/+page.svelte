<script>
	export let data;
</script>

<h1 class=" text-center text-3xl text-green-400 font-bold my-4">Welcome to LibraLuxe</h1>

<main class="">
	{#each data.books as book, index (book.id)}
		<p class="text-2xl text-blue-400">Title: {book.title}</p>
		<p>{book.description}</p>
	{/each}
</main>
