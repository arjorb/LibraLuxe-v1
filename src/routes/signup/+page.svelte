<script>
	import { enhance } from '$app/forms';
</script>

<main class="flex justify-center mt-64">
	<div class="w-96">
		<h1 class="text-4xl font-medium text-gray-600">Create an Account</h1>
		<form method="POST" action="?/signup" class="space-y-5 my-7" use:enhance>
			<label class="flex flex-col text-gray-500">
				Email
				<input
					type="email"
					name="email"
					placeholder="Enter Email"
					class="w-full px-2 py-5 border border-gray-200 rounded outline-none"
					required
				/>
			</label>
			<label class="flex flex-col text-gray-500">
				Password
				<input
					type="password"
					name="password"
					placeholder="Enter Password"
					class="w-full px-2 py-5 border border-gray-200 rounded outline-none"
					required
				/>
			</label>
			<button class="right-0 px-8 py-2 text-white bg-blue-500 rounded-sm">Sign up</button>
			<p class="text-sm text-gray-400">
				Have an account already? <a href="/login" class="text-blue-500">Log in</a>
			</p>
		</form>
	</div>
</main>
