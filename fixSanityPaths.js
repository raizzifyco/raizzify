import fs from 'fs'
import path from 'path'

const filePath = path.join('out', 'raizzify', 'studio', 'index.html')
let html = fs.readFileSync(filePath, 'utf-8')

html = html
  .replace(/(src|href)=["']\/static\//g, '$1="/raizzify/studio/static/')
  .replace(/url\(["']?\/static\//g, 'url("/raizzify/studio/static/')
  .replace(/content=["']\/static\//g, 'content="/raizzify/studio/static/')

fs.writeFileSync(filePath, html)

console.log('✅ Sanity Studio HTML paths fixed')
