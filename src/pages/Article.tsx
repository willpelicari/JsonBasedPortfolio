import { sanitize } from 'dompurify'
import markdownit from 'markdown-it'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Article() {
  const navigate = useNavigate()
  const { filename } = useParams()
  const [content, setContent] = useState('')
  const md = markdownit({
    html: true
  })

  function createMarkup(dirty: string) {
    return { __html: sanitize(dirty) }
  }

  function getArticleByFilename(
    filename: string | undefined
  ): RequestInfo | URL {
    if (!filename) {
      navigate('/')
      return ''
    }

    const filePath = `${sanitize(filename)}.md`
    return `/articles//${filePath}`
  }

  useEffect(() => {
    fetch(getArticleByFilename(filename))
      .then((response) => response.text())
      .then((text) => setContent(md.render(text)))
      .catch((error) => console.log(error))
  }, [filename])

  return (
    <div
      className="prose dark:prose-invert prose-slate max-w-none"
      dangerouslySetInnerHTML={createMarkup(content)}
    ></div>
  )
}
