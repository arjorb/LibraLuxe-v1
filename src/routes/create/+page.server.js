import supabase from '$lib/supabase.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
	create: async ({ request }) => {
		const formData = await request.formData();
		const file = formData.get('image');

		const { data, error } = await supabase.storage.from('assets').upload(`${file.name}`, file);
		if (error) throw error;
		const imageUrl = `https://drnamjbdwevcycnugyrt.supabase.co/storage/v1/object/public/${data.fullPath}`;

		const { data: insertData, error: insertError } = await supabase.from('books').insert([
			{
				title: formData.get('title'),
				description: formData.get('description'),
				genre: formData.get('genre'),
				language: formData.get('language'),
				publication_year: formData.get('publication'),
				cover_image: imageUrl,
				pages: formData.get('pages')
			}
		]);

		if (insertError) {
			console.error('Error inserting data:', insertError.message);
		} else {
			console.log('Inserted data:', insertData);
			throw redirect(302, '/');
		}
	}
};
