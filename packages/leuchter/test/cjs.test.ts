import { extractAnnotations, highlight } from '../dist/index.cjs'
import { runTests } from './highlight.js'
import { runAnnotationTests } from './annotations.js'

runTests({ highlight })

runAnnotationTests({ extractAnnotations, highlight })
