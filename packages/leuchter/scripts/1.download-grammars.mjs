import fs from 'node:fs'
import path from 'node:path'
import fetch from 'node-fetch'
import consolji from 'consolji'

// download all jsons from https://github.com/shikijs/shiki/tree/main/packages/shiki/languages
// and write them to leuchter/grammars

const url = 'https://api.github.com/repos/shikijs/shiki/contents/packages/shiki/languages'

async function downloadGrammar(file) {
   if (file.type === 'file') {
      consolji.log(`Downloading: ${file.name}`)
      const filePath = path.join('grammars', file.name)
      const fileResponse = await fetch(file.download_url)
      const content = await fileResponse.text()
      fs.writeFileSync(filePath, content)
   }
}

async function downloadGrammars() {
   try {
      const response = await fetch(url)
      const files = await response.json()
      await Promise.all(files.map(downloadGrammar))
      consolji.log('Folder download complete')
   }
   catch (error) {
      console.error(`Error downloading folder: ${error.message}`)
   }
}

await downloadGrammars()
