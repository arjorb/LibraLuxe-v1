import supabase from '$lib/supabase';

export async function load() {
	const { data } = await supabase.from('books').select();
	return { books: data };
}
