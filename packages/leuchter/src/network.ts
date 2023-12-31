// this will be replaced at build time with the version from package json
const LEUCHTER_VERSION = '__LEUCHTER_VERSION__'

// endpoints:
// /grammars/${name}.json
// /themes/${name}.json
export async function fetchJSON(endpoint: string) {
   if (typeof fetch === 'function') {
      // console.log(`using fetch`, `https://leuchter.nyxb.zip/${endpoint}.json`);
      const r = await fetch(`https://leuchter.nyxb.zip/${endpoint}.json`)
      return await r.json()
   }
   // console.log(`using https`, `https://leuchter.nyxb.zip/${endpoint}.json`);

   const https = await import('node:https')
   const options = {
      host: 'leuchter.nyxb.zip',
      path: `/${endpoint}.json`,
      method: 'GET',
   }

   return new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
         let data = ''
         res.on('data', (chunk) => {
            data += chunk
         })
         res.on('end', () => {
            resolve(JSON.parse(data))
         })
      })

      req.on('error', (error) => {
         reject(error)
      })

      req.end()
   })
}
