import type {
   RawTheme,
   StringTheme,
   Theme,
} from './theme'
import {
   THEME_NAMES,
   UnknownThemeError,
   getAllThemeColors,
   getTheme,
   preloadTheme,
} from './theme'
import type { LanguageAlias, LanguageName } from './language-data'
import { LANG_NAMES } from './language-data'
import {
   UnknownLanguageError,
   getGrammar,
   highlightText,
   highlightTokens,
   highlightTokensWithScopes,
   preloadGrammars,
} from './highlighter'
import type { Annotation } from './comments'
import { extractCommentsFromCode } from './comments'
import type {
   Line,
   LineGroup,
   Lines,
   Token,
   TokenGroup,
   Tokens,
} from './annotations'
import {
   applyAnnotations,
} from './annotations'

interface Config { scopes?: boolean }
type AnnotatedConfig = { annotations: Annotation[] } & Config
interface LeuchterResult {
   lines: Token[][]
   lang: LanguageName
   style: {
      color: string
      background: string
   }
}
interface AnnotatedLeuchterResult {
   lines: Lines
   lang: LanguageName
   style: {
      color: string
      background: string
   }
}

export { UnknownLanguageError, UnknownThemeError, THEME_NAMES, LANG_NAMES }

export type {
   LanguageAlias,
   Theme,
   StringTheme,
   RawTheme,
   Annotation,
   Lines,
   LineGroup,
   Line,
   TokenGroup,
   Tokens,
   Token,
   LeuchterResult,
   AnnotatedLeuchterResult,
}

function isAnnotatedConfig(
   config: Config | AnnotatedConfig,
): config is AnnotatedConfig {
   return 'annotations' in config
}

export async function preload(langs: LanguageAlias[], theme?: Theme) {
   await Promise.all([preloadGrammars(langs), preloadTheme(theme)])
}

export async function highlight(
   code: string,
   lang: LanguageAlias,
   themeOrThemeName?: Theme,
   config?: Config
): Promise<LeuchterResult>
export async function highlight(
   code: string,
   lang: LanguageAlias,
   themeOrThemeName: Theme,
   config: AnnotatedConfig
): Promise<AnnotatedLeuchterResult>
export async function highlight(
   code: string,
   lang: LanguageAlias,
   themeOrThemeName: Theme = 'dark-plus',
   config: Config | AnnotatedConfig = {},
) {
   const theCode = code || ''
   const theLang = lang || 'text'

   if (typeof theCode !== 'string')
      throw new Error('Syntax highlighter error: code must be a string')

   if (typeof theLang !== 'string')
      throw new Error('Syntax highlighter error: lang must be a string')

   await preload([theLang], themeOrThemeName)
   return highlightSync(theCode, theLang, themeOrThemeName, config) as any
}
export function highlightSync(
   code: string,
   lang: LanguageAlias,
   themeOrThemeName?: Theme,
   config?: Config
): LeuchterResult
export function highlightSync(
   code: string,
   lang: LanguageAlias,
   themeOrThemeName: Theme,
   config: AnnotatedConfig
): AnnotatedLeuchterResult
export function highlightSync(
   code: string,
   lang: LanguageAlias,
   themeOrThemeName: Theme = 'dark-plus',
   config: Config | AnnotatedConfig = {},
) {
   const theCode = code || ''
   const theLang = lang || 'text'

   if (typeof theCode !== 'string')
      throw new Error('Syntax highlighter error: code must be a string')

   if (typeof theLang !== 'string')
      throw new Error('Syntax highlighter error: lang must be a string')

   const { langId, grammar } = getGrammar(theLang)
   const theme = getTheme(themeOrThemeName)

   const lines
    = langId === 'text'
       ? highlightText(theCode)
       : config?.scopes
          ? highlightTokensWithScopes(theCode, grammar, theme)
          : highlightTokens(theCode, grammar, theme)

   if (isAnnotatedConfig(config)) {
      const annotations = config?.annotations || []
      return {
         lines: applyAnnotations(lines, annotations),
         lang: langId,
         style: {
            color: theme.foreground,
            background: theme.background,
         },
      }
   }
   else {
      return {
         lines,
         lang: langId,
         style: {
            color: theme.foreground,
            background: theme.background,
         },
      }
   }
}

export async function extractAnnotations(
   code: string,
   lang: LanguageAlias,
   annotationNames: string[] = [],
) {
   if (annotationNames.length === 0)
      return { code, annotations: [] }

   await preloadGrammars([lang])
   const { grammar } = getGrammar(lang)

   const { newCode, annotations } = extractCommentsFromCode(
      code,
      grammar,
      annotationNames,
   )

   return { code: newCode, annotations }
}

export async function getThemeColors(themeOrThemeName: Theme) {
   if (!themeOrThemeName)
      throw new Error('Syntax highlighter error: undefined theme')

   await preload([], themeOrThemeName)
   const theme = getTheme(themeOrThemeName)
   return getAllThemeColors(theme)
}

export function getThemeColorsSync(themeOrThemeName: Theme) {
   if (!themeOrThemeName)
      throw new Error('Syntax highlighter error: undefined theme')

   const theme = getTheme(themeOrThemeName)
   return getAllThemeColors(theme)
}

export type LeuchterColors = ReturnType<typeof getThemeColors>
