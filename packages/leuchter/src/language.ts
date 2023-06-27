import type {
   LanguageAlias,
   LanguageData,
} from './language-data'
import {
   aliasOrIdToScope,
   scopeToLanguageData,
} from './language-data'

export function aliasToLangData(alias: LanguageAlias) {
   const scope = aliasOrIdToScope[alias]
   if (!scope)
      return undefined

   const { id } = scopeToLanguageData[scope]

   return {
      id,
      scopeName: scope,
   }
}

export function scopeToLangData(scope: string): LanguageData | undefined {
   const data = scopeToLanguageData[scope]
   return data
}
