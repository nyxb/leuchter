import { extractAnnotations, highlight } from '../dist/index.esm.mjs'
import { runAnnotationTests } from './annotations.js'
import { runTests } from './highlight.js'

runTests({ highlight })
runAnnotationTests({ extractAnnotations, highlight })
