import resolveSync from './resolve'

export async function readJSON(folder: string, filename: string) {
   // throw new Error("no file system");
   const fs = await import('node:fs').then(m => m.promises)
   const path = await import('node:path')
   const { URL } = await import('node:url')
   const __dirname = new URL('.', import.meta.url).pathname
   try {
      const folderPath = path.resolve(__dirname, '..', folder)
      const filepath = path.resolve(folderPath, filename)
      const result = await fs.readFile(filepath, 'utf8')
      if (!result)
         throw new Error('no results')

      return JSON.parse(result)
   }
   catch (e) {
      // console.log("using resolve");
      const indexFile = resolveSync('@code-hike/lighter', { basedir: __dirname })
      const folderPath = path.resolve(indexFile, '..', '..', folder)
      const filepath = path.resolve(folderPath, filename)
      return JSON.parse(await fs.readFile(filepath, 'utf8'))
   }
}
