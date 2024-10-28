const fs = require('fs')
const path = require('path')

const articlesDir = path.join(__dirname, 'public', 'articles')
const outputFile = path.join(__dirname, 'src', 'articlesList.json')

fs.readdir(articlesDir, (err, files) => {
  if (err) {
    console.error('Error reading articles directory', err)
    process.exit(1)
  }
  const articles = files
    .filter((file) => /\.(md)$/.test(file))
    .map((file) => {
      const content = fs.readFileSync(path.join(articlesDir, file), 'utf-8')
      const firstLine = content.split('\n')[0]
      const match = firstLine.match(/<!--\s*(\d{4}-\d{2}-\d{2})\s*(.*?)\s*-->/)

      let articleDate = '1970-01-01'
      let articleTitle = file
      if (match) {
        articleDate = match[1].trim()
        articleTitle = match[2].trim()
      } else {
        console.warn(
          `Warning: No date/title found in ${file}. Using default date.`
        )
      }

      return {
        date: articleDate,
        title: articleTitle,
        path: path.parse(file).name
      }
    })
    .sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)

      return dateB - dateA
    })

  fs.writeFileSync(outputFile, JSON.stringify(articles))
  console.log('Articles list generated:', articles)
})
