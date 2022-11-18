import { error } from '@sveltejs/kit';

export async function load({ params }) {
    try {
        const post = await import(`../../../md/docs/${params.slug}.md`)
        const { title, date , tags} = post.metadata
        const content = post.default
        return {
            content,
            title,
            date,
            tags
        }
    } catch (error) {
        throw error(404, 'Not found');
    }
}
