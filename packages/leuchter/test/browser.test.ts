import { extractAnnotations, highlight } from '../dist/browser.esm.mjs'
import { runTests } from './highlight.js'
import { runAnnotationTests } from './annotations.js'

runTests({ highlight })
runAnnotationTests({ extractAnnotations, highlight })
