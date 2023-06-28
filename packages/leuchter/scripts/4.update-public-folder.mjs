import { promises as fs } from 'node:fs'
import consolji from 'consolji'
import { languages } from './languages.mjs'

async function generateGrammars() {
   const gs = {}

   await Promise.all(
      languages.map(async (language) => {
         gs[language.id] = {
            grammar: JSON.parse(
               await fs.readFile(`./grammars/${language.path}`, 'utf8'),
            ),
            deps: language.embeddedLangs || [],
         }
      }),
   )

   await Promise.all(
      languages.map(async (language) => {
         const ids = []
         const deps = [...gs[language.id].deps, language.id]
         while (deps.length) {
            const dep = deps.shift()
            if (!ids.includes(dep)) {
               ids.push(dep)
               deps.unshift(...gs[dep].deps)
            }
         }
         gs[language.id].fullDeps = ids

         const contents = ids.map(id => gs[id].grammar)
         const content = JSON.stringify(contents)

         gs[language.id].content = content

         await fs.writeFile(
        `../web/public/grammars/${language.id}.json`,
        content,
        'utf8',
         )
         consolji.log(`Generated ${language.id}.json`)
      }),
   )
}

async function generateThemes() {
   const themes = await fs.readdir('./themes')
   await Promise.all(
      themes.map(async (filename) => {
         const theme = await fs.readFile(`./themes/${filename}`, 'utf8')
         const content = JSON.stringify(JSON.parse(theme))
         await fs.writeFile(`../web/public/themes/${filename}`, content, 'utf8')
         consolji.log(`Generated ${filename}`)
      }),
   )
}

consolji.log('Generating Grammars...')
await generateGrammars()
consolji.log('Generating Themes...')
await generateThemes()
