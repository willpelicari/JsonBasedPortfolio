import { sanitize } from 'dompurify'
import markdownit from 'markdown-it'
import { useEffect, useState } from 'react'
import articlesList from '../articlesList.json'

export default function Blog() {
  const [content, setContent] = useState('')
  const md = markdownit({
    html: true
  })

  function createMarkup(dirty: string) {
    return { __html: sanitize(dirty) }
  }

  useEffect(() => {
    fetch('articles/001.md')
      .then((response) => response.text())
      .then((text) => setContent(md.render(text)))
  })

  return (
    <div className="bg-slate-100 dark:bg-slate-900 h-screen flex flex-row p-5 h-full">
      <div id="leftSection" className="p-5 w-1/4">
        <ul>
          {articlesList?.map((article, key) => (
            <li key={`article-${key}`}>
              {article.date
                ? article.date + ' ' + article.title
                : article.title}
            </li>
          ))}
        </ul>
      </div>
      <div id="rightContent" className="p-5 w-3/4">
        <div
          className="prose dark:prose-invert prose-slate max-w-none"
          dangerouslySetInnerHTML={createMarkup(content)}
        ></div>
      </div>
    </div>
  )
}
