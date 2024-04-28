import { bundleMDX } from "mdx-bundler"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"

export default async function MDXServer(code: string) {
  const result = await bundleMDX({
    source: code,
    mdxOptions(options) {
      options.rehypePlugins = [
        ...((options.rehypePlugins ?? []) as any[]), // Type assertion here
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: "dracula",
          },
        ],
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["hash-anchor"],
            },
          },
        ],
      ]
      return options
    },
  })

  return result.code
}

// export default async function MDXServer(code: string) {
//   const result = await bundleMDX({
//     source: code,
//     // mdxOptions(options) {
//     //   options.rehypePlugins = [
//     //     ...(options.rehypePlugins ?? []),
//     //     rehypeSlug,
//     //     [
//     //       rehypePrettyCode,
//     //       {
//     //         theme: "dracula",
//     //       },
//     //     ],
//     //     [
//     //       rehypeAutolinkHeadings,
//     //       {
//     //         properties: {
//     //           className: ["hash-anchor"],
//     //         },
//     //       },
//     //     ],
//     //   ]
//     //   return options
//     // },
//   })

//   return result.code
// }
