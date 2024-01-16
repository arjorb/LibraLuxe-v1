import supabase from '$lib/supabase';

export async function load({ params }) {
	const { data } = await supabase.from('books').select().eq('id', params.id);
	return { book: data };
}
