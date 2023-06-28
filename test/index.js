import { highlight } from 'leuchter'
import consolji from 'consolji'

const { lines, style } = await highlight(
   /* code  */ 'print(\'hello\')',
   /* lang  */ 'py',
   /* theme */ 'github-dark',
)

// base foreground and background
const { color, background } = style

consolji.log(color, background)
consolji.log(lines)
