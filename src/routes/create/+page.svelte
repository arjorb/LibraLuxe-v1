<script>
	import { enhance } from '$app/forms';
</script>

<main class="max-w-3xl mx-auto my-32">
	<h1 class="text-xl font-semibold text-gray-600">Embarking on a bookish adventure!📚</h1>
	<form
		method="POST"
		class="w-full space-y-5 my-14"
		action="?/create"
		enctype="multipart/form-data"
		use:enhance
	>
		<div class="flex w-full gap-5 text-xs text-gray-500">
			<label class="w-full">
				Title
				<input
					type="text"
					name="title"
					class="w-full px-2 py-3 border border-gray-200 rounded outline-none"
				/>
			</label>
			<label class="w-full">
				genre
				<input
					type="text"
					name="genre"
					class="w-full px-2 py-3 border border-gray-200 rounded outline-none"
				/>
			</label>
		</div>
		<div class="flex w-full gap-5 text-xs text-gray-500">
			<label class="w-full">
				Descprition
				<textarea
					name="description"
					class="w-full px-2 py-3 border border-gray-200 rounded outline-none resize-none"
					rows="10"
				/>
			</label>
		</div>

		<div class="flex w-full gap-5 text-xs text-gray-500">
			<label class="w-full">
				Language
				<input
					type="text"
					name="language"
					class="w-full px-2 py-3 border border-gray-200 rounded outline-none"
				/>
			</label>
			<label class="w-full">
				Publication Year
				<input
					type="text"
					name="publication"
					class="w-full px-2 py-3 border border-gray-200 rounded outline-none"
				/>
			</label>
			<label class="w-full">
				Pages
				<input
					type="number"
					name="pages"
					class="w-full px-2 py-3 border border-gray-200 rounded outline-none"
				/>
			</label>
		</div>

		<div class="flex items-center justify-center w-full">
			<label
				for="dropzone-file"
				class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
			>
				<div class="flex flex-col items-center justify-center pt-5 pb-6">
					<img src="/upload.svg" alt="upload icon" class="w-5" />
					<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
						<span class="font-semibold">Click to upload </span>
					</p>
					<p class="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or GIF (MAX. 800x400px)</p>
				</div>
				<input id="dropzone-file" name="image" type="file" class="hidden" />
			</label>
		</div>

		<div class="flex gap-4 text-xs font-semibold">
			<a href="/" class="px-6 py-2 text-gray-500 bg-gray-200 rounded-sm">cancel</a>
			<button type="submit" class="px-6 py-2 text-white rounded-sm bg-fuchsia-500"
				>Create New Book</button
			>
		</div>
	</form>
</main>
