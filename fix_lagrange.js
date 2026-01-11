import fs from 'fs'
import path from 'path'

const filePath = '/home/ace/gitfiles/blog/chimablog/content/posts/lagrange.md'
let content = fs.readFileSync(filePath, 'utf8')

// Undo the broken sed commands: replace "{\n" with "{" and "\n}" with "}"
// Note: We might have multiple newlines or spaces now
content = content.replace(/\{\s*\n\s*/g, '{').replace(/\s*\n\s*\}/g, '}')

fs.writeFileSync(filePath, content)
console.log('Cleaned up lagrange.md')
