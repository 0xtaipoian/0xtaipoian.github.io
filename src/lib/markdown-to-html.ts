import remark from 'remark'
import codeblocks from 'remark-code-blocks'
import html from 'remark-html'

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).use(codeblocks, { lang: 'js' }).process(markdown)
  return result.toString()
}