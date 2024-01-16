<script>
	export let data;
	console.log(data);
</script>

<h1 class=" text-center text-3xl text-green-400 font-bold my-4">Welcome to LibraLuxe</h1>

<main class="mx-10">
	{#each data.books as book, index (book.id)}
		<p>Title: {book.title}</p>
		<p>Description: Bla bla bla</p>
	{/each}
</main>
