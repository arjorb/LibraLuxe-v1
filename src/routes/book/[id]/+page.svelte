<script>
	import { page } from '$app/stores';
</script>

<main class="max-w-2xl mx-auto my-32">
	<h1 class="my-2 text-2xl font-bold text-gray-700">To kill a Mockingbird</h1>
	<p class="mb-3 text-xs font-semibold text-fuchsia-500">Genre of the Book</p>

	<img
		src="https://images.unsplash.com/photo-1568209826067-d315d5c9d647?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		alt="cover title"
		class="w-full h-[400px] object-cover rounded mb-5"
	/>
	<hr />
	<div class="flex justify-between my-2">
		<div class="flex items-center gap-2 text-xs">
			<img
				src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="authar's name"
				class="object-cover w-6 h-6 rounded-full"
			/>
			<span>Author's name</span>
		</div>
		<div class="flex gap-3 text-xs">
			<button class="text-blue-400">Update</button>
			<button class="text-blue-400">Delete</button>
			<button class="text-blue-400">Bookmark</button>
		</div>
	</div>
	<hr />

	<div class="my-5 text-gray-600">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi culpa nam dolor alias voluptates
		corporis itaque dolorum natus. Similique excepturi quos labore aliquam. Incidunt aliquid, modi
		voluptate culpa eaque, sit odit unde id suscipit consequuntur repudiandae cupiditate ut aperiam
		iusto earum esse minus neque aut, illo dolor consequatur? Cupiditate, iure?
	</div>

	<footer class="flex justify-between text-sm font-medium text-gray-500">
		<p>Publication Year - 2024</p>
		<p>Book Pages - 218</p>
		<p>Language - English</p>
	</footer>
</main>
