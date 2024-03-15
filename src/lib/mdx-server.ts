import { bundleMDX } from "mdx-bundler"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import { Transformer } from "unified"

// Define a type alias for the array of plugins
type RehypePlugin = Transformer<any, any>

export default async function MDXServer(code: string) {
  const result = await bundleMDX({
    source: code,
    mdxOptions(options) {
      // Define the rehypePlugins array with the correct types
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug as RehypePlugin,
        [
          rehypePrettyCode,
          {
            theme: "dracula",
            // The rest of the rehypePrettyCode config
          },
        ] as [RehypePlugin, { theme: string }],
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["hash-anchor"],
            },
          },
        ] as [RehypePlugin, any],
      ]
      return options
    },
  })

  return result.code
}
