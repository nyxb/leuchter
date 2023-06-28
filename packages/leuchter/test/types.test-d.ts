import { expectTypeOf, test } from 'vitest'
import type {
   AnnotatedLighterResult,
   LighterResult,
} from '../src'
import {
   highlight,
   highlightSync,
   preload,
} from '../src'

test('highlight sync types', async () => {
   await preload(['typescript'], 'dark-plus')
   const notAnnotatedResult = highlightSync(
      'const x = 1;',
      'typescript',
      'dark-plus',
   )
   const annotatedResult = highlightSync(
      'const x = 1;',
      'typescript',
      'dark-plus',
      {
         annotations: [],
      },
   )

   expectTypeOf(notAnnotatedResult).toMatchTypeOf<LighterResult>()
   expectTypeOf(annotatedResult).toMatchTypeOf<AnnotatedLighterResult>()
})

test('highlight types', async () => {
   const notAnnotatedResult = await highlight(
      'const x = 1;',
      'typescript',
      'dark-plus',
      {},
   )
   const annotatedResult = await highlight(
      'const x = 1;',
      'typescript',
      'dark-plus',
      {
         annotations: [],
      },
   )

   expectTypeOf(notAnnotatedResult).toMatchTypeOf<LighterResult>()
   expectTypeOf(annotatedResult).toMatchTypeOf<AnnotatedLighterResult>()
})
