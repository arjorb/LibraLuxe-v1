import supabase from '$lib/supabase.js';
import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	signup: async ({ request }) => {
		const formData = await request.formData();

		const { data, error: err } = await supabase.auth.signUp({
			email: formData.get('email'),
			password: formData.get('password')
		});

		if (err) {
			if (err instanceof AuthApiError && err.status === 400) {
				return fail(400, {
					error: 'Incorrect email or password'
				});
			}
			return fail(500, {
				error: 'Server error. Please try again later.'
			});
		}
		console.log(data);
		throw redirect(300, '/');
	}
};
