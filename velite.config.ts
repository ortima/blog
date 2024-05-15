import { defineCollection, defineConfig, s } from 'velite'

const computedFields = <T extends { slug: string }>(data: T) => ({
	...data,
	slugAsParams: data.slug.split("/").slice(1).join("/"),
})

const posts = defineCollection({
	name: 'Post', // collection type name
	pattern: 'blog/**/*.mdx', // content files glob pattern
	schema: s
		.object({
			title: s.string().max(99), // Zod primitive type
			slug: s.path(), // auto generate slug from file path
			description: s.string().max(99),
			date: s.isodate(), // input Date-like string, output ISO Date string.
			published: s.boolean().default(true),
			body: s.mdx(),
		})
		.transform(computedFields)
})

export default defineConfig({
	root: "content",
	output: {
		data: ".velite",
		assets: "public/static",
		base: "/static/",
		name: "[name]-[hash:6].[ext]",
		clean: true
	},
	collections: { posts },
	mdx: {
		rehypePlugins: [],
		recmaPlugins: []
	}
})