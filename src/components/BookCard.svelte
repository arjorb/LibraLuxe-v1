<a href="/book/{$$props.id}">
	<main class="w-[320px] h-[300px] my-5">
		<div class="">
			<img src={$$props.cover_image} alt={$$props.title} class="w-full h-[150px] object-cover" />
		</div>
		<div class="px-1 py-3">
			<p class="text-sm font-medium text-violet-400">{$$props.genre}</p>
			<p class="my-2 text-lg font-semibold text-gray-600">
				{$$props.title.substring(0, 30)}
				{$$props.title.length > 30 ? '...' : ''}
			</p>
			<hr class="my-3" />
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-2 text-sm font-medium">
					<img
						src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="author name"
						class="object-cover rounded-full h-7 w-7"
					/>
					<p class="">Author's name</p>
				</div>
				<button class="px-3 py-1 text-sm border rounded-sm border-ray-300">Bookmark</button>
			</div>
		</div>
	</main>
</a>
