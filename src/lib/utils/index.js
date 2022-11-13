export const fetchMarkdownPosts = async () => {
  return await fetchMarkdownFiles("posts");
}

export const fetchMarkdownDocs = async () => {
  return await fetchMarkdownFiles("docs");
}

const fetchMarkdownFiles = async (url) => {
  let allMdFiles;
  switch (url) {
    case "docs": allMdFiles = import.meta.glob("/src/routes/docs/*.md");
      break;
    case "posts": allMdFiles = import.meta.glob("/src/routes/posts/*.md");
      break;
  }

  const iterableMdFiles = Object.entries(allMdFiles)

  const allMd = await Promise.all(
    iterableMdFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postPath = path.slice(11, -3)

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )

  return allMd
}