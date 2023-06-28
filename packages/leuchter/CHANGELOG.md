# Changelog


## v0.0.2

[compare changes](https://github.com/nyxb/leuchter/compare/v0.0.1...v0.0.2)


### 🏡 Chore

  - **web): remove unused files app-build-manifest.json and build-manifest.json 📦 chore(web): update leuchter dependency to version ^0.0.1 📦 chore(leuchter:** Add themes and grammars directories to package.json files field ([0d40260](https://github.com/nyxb/leuchter/commit/0d40260))

### ❤️  Contributors

- Nyxb <contact@nyxb.xyz>

## v0.0.1


### 🚀 Enhancements

  - **load-buffer.js:** Add support for loading files as base64-encoded ArrayBuffer to be able to use them in web workers and service workers ([29eda09](https://github.com/nyxb/leuchter/commit/29eda09))
  - **rollup.config.js:** Add rollup configuration file for leuchter package to build cjs, esm and d.ts files. Add plugins for nodeResolve, commonjs, replace, json, typescript and arraybuffer. Add support for browser esm build with fake file-system. ([757bdeb](https://github.com/nyxb/leuchter/commit/757bdeb))
  - **highlight.ts:** Add tests for the highlight function to ensure proper functionality and error handling ([4b2fe2a](https://github.com/nyxb/leuchter/commit/4b2fe2a))
  - **tokenizer.ts): add support for tokenizing code with vscode-textmate library and adding styles to tokens based on metadata ✅ test(annotations.ts:** Add tests for extractAnnotations and highlight functions in the annotations module ([0ec7f31](https://github.com/nyxb/leuchter/commit/0ec7f31))
  - **theme.ts:** Add support for loading and caching themes, and convert them to a final theme object with all the necessary properties. Also, add a function to get all the colors of a theme. ([4dfbeb0](https://github.com/nyxb/leuchter/commit/4dfbeb0))
  - **theme-colors.ts:** Add module to handle theme colors and their defaults, and provide functions to get color scheme and color by name ([c6a7f43](https://github.com/nyxb/leuchter/commit/c6a7f43))
  - **range.ts:** Add range parsing functionality to be able to parse range strings into code ranges. This is useful for highlighting code ranges in editors. ([2aa920f](https://github.com/nyxb/leuchter/commit/2aa920f))
  - **network.ts:** Add fetchJSON function to fetch JSON data from lighter.codehike.org server. This function supports both browser fetch and node https module. The function is used to fetch grammar and theme JSON files from the server. The LIGHTER_VERSION constant is added to the file and will be replaced at build time with the version from package.json. ([e613be8](https://github.com/nyxb/leuchter/commit/e613be8))
  - **language.ts:** Add functions to convert language alias to language data and scope to language data ([dbdda75](https://github.com/nyxb/leuchter/commit/dbdda75))
  - **annotations.inline.ts:** Add function to annotate a line with inline annotations by creating a new annotated line with the annotations added to it. ([7b0a72a](https://github.com/nyxb/leuchter/commit/7b0a72a))
  - **leuchter:** Add syntax highlighting library with support for multiple languages and themes. Includes functions for preloading grammars and themes, highlighting code with or without annotations, extracting annotations from code, and getting theme colors. ([8cb2381](https://github.com/nyxb/leuchter/commit/8cb2381))
  - **highlighter.ts:** Add support for syntax highlighting by adding functions to preload grammars, get grammar by alias, highlight tokens, highlight tokens with scopes, and highlight text. ([70ca3a1](https://github.com/nyxb/leuchter/commit/70ca3a1))
  - **grammars.ts:** Add support for loading grammars from network and file system based on availability to improve performance and reliability. ([dd430a8](https://github.com/nyxb/leuchter/commit/dd430a8))
  - **file-system.ts:** Add readJSON function to read JSON files from the file system. If the file is not found in the specified folder, it will try to resolve the folder using the resolveSync function from the '@code-hike/lighter' package. ([5b13827](https://github.com/nyxb/leuchter/commit/5b13827))
  - **file-system.fake.ts:** Add readJSON function to fake file system to throw an error when called to prevent unwanted behavior ([7243100](https://github.com/nyxb/leuchter/commit/7243100))
  - **comments.ts:** Add support for extracting annotations from code and returning them as an array of Annotation objects. Annotations are defined by comments that match a specific format and contain a name and optional query and range. ([c64cd4a](https://github.com/nyxb/leuchter/commit/c64cd4a))
  - **color.ts): add functions to convert hex color strings to color objects and vice versa ✨ feat(color.ts:** Add function to make a color transparent by a given opacity ([4e81a6a](https://github.com/nyxb/leuchter/commit/4e81a6a))
  - **annotations.ts:** Add support for applying annotations to lines of code, both inline and multiline, with customizable tokens and styles. ([b15a257](https://github.com/nyxb/leuchter/commit/b15a257))
  - **annotations.multiline.ts:** Add support for multiline annotations to be able to annotate multiple lines at once ([59b95d7](https://github.com/nyxb/leuchter/commit/59b95d7))
  - **tokens.test.ts.snap:** Add snapshot test for removing empty space tokens to improve test coverage ([2b926e1](https://github.com/nyxb/leuchter/commit/2b926e1))
  - **browser.test.ts:** Add browser tests for the 'highlight' and 'extractAnnotations' functions in the browser build of the package 'leuchter' ([dfa4ce2](https://github.com/nyxb/leuchter/commit/dfa4ce2))
  - **cjs.test.ts:** Add test file for CommonJS module to test the functionality of the 'extractAnnotations' and 'highlight' functions in the 'leuchter' package ([ebb0ef4](https://github.com/nyxb/leuchter/commit/ebb0ef4))
  - **types.test-d.ts:** Add type tests for highlight and highlightSync functions ([72be5ab](https://github.com/nyxb/leuchter/commit/72be5ab))
  - **resolve.js:** Add resolveSync function to handle module resolution ([69696b1](https://github.com/nyxb/leuchter/commit/69696b1))
  - **diff.tmLanguage.json): add diff grammar file for syntax highlighting in Leuchter package 📝 chore(diff.tmLanguage.json): add information for contributors and version details 🔧 fix(diff.tmLanguage.json): fix regex pattern for meta.diff.header.from-file to correctly capture file names 🔧 fix(diff.tmLanguage.json): fix regex pattern for meta.diff.header.to-file to correctly capture file names 🔧 fix(diff.tmLanguage.json): fix regex pattern for comment.line.number-sign.diff to correctly capture comments 🔧 fix(diff.tmLanguage.json): fix regex pattern for meta.diff.index to correctly capture index details 🔧 fix(diff.tmLanguage.json): fix regex pattern for meta.diff.index to correctly capture index details 🔧 fix(diff.tmLanguage.json): fix regex pattern for meta.diff.index to correctly capture index details 🔧 fix(diff.tmLanguage.json): fix regex pattern for meta.diff.index to correctly capture index details 🔧 fix(diff.tmLanguage.json): fix regex pattern for meta.diff.index to correctly capture index details 🔧 fix(diff.tmLanguage.json): fix regex pattern for meta.diff.index to correctly capture index details 🔧 fix(diff.tmLanguage.json): fix regex pattern for meta.diff.index to correctly capture index details 🔧 fix(diff.tmLanguage.json): fix regex pattern for meta.diff.index to correctly capture index details 🔧 fix(diff.tmLanguage.json): fix regex pattern for meta.diff.index to correctly capture index details 🔧 fix(diff.tmLanguage.json): fix regex pattern for meta.diff.index to correctly capture index details 🔧 fix(diff.tmLanguage.json): fix regex pattern for meta.diff.index to correctly capture index details 🔧 fix(diff.tmLanguage.json): fix regex pattern for meta.diff.index to correctly capture index details 🔧 fix(diff.tmLanguage.json): fix regex pattern for meta.diff.index to correctly capture index details 🔧 fix(diff.tmLanguage.json): fix regex pattern for meta.diff.index to correctly capture index details 🔧 fix(diff.tmLanguage.json): fix regex pattern for meta.diff.index to correctly capture index details 🔧 fix(diff.tmLanguage.json): fix regex pattern for meta.diff.index to correctly capture index details 🔧 fix(diff.tmLanguage.json:** Fix regex pattern for meta.diff.index to correctly capture index details ([6431718](https://github.com/nyxb/leuchter/commit/6431718))
  - **solarized-light.json:** Add solarized-light theme configuration file for the web app ([7c6d057](https://github.com/nyxb/leuchter/commit/7c6d057))
  - **code.js): add Code component to render highlighted code with line numbers and customizable theme 🐛 fix(code.js): fix line number alignment issue in Code component 🔧 chore(code.js): add missing import statements in Code component 🔧 chore(code.js): remove commented out code in Code component 🔧 chore(code.js:** Remove unused variables in Code component ([a32a90e](https://github.com/nyxb/leuchter/commit/a32a90e))

### 🩹 Fixes

  - **file-system.ts:** Fix resolveSync argument to correctly resolve the file path ([7f4cf14](https://github.com/nyxb/leuchter/commit/7f4cf14))

### 💅 Refactors

  - **index.ts): rename LighterResult interface to LeuchterResult for better clarity and consistency 🔄 refactor(index.ts): rename AnnotatedLighterResult interface to AnnotatedLeuchterResult for better clarity and consistency 🔄 refactor(index.ts): rename highlight function return types from LighterResult to LeuchterResult for better clarity and consistency 🔄 refactor(index.ts): rename highlightSync function return types from LighterResult to LeuchterResult for better clarity and consistency 🔄 refactor(index.ts:** Rename LighterColors type to LeuchterColors for better clarity and consistency ([5968d3a](https://github.com/nyxb/leuchter/commit/5968d3a))
  - **network.ts:** Rename LIGHTER_VERSION constant to LEUCHTER_VERSION for better clarity and consistency ([57c0772](https://github.com/nyxb/leuchter/commit/57c0772))
  - **browser.test.ts.snap:** Remove unused snapshots from the file ([7e69991](https://github.com/nyxb/leuchter/commit/7e69991))
  - **colors.test.ts:** Remove unused theme color snapshots to improve code cleanliness and reduce clutter ([f40c210](https://github.com/nyxb/leuchter/commit/f40c210))

### 📖 Documentation

  - **README.md): update project name and add usage example and credits section 📦 chore(package.json): add dev script to run watch and dev commands for leuchter package 🔧 chore(pnpm-workspace.yaml:** Add 'test' package to the list of packages in the pnpm workspace configuration ([e051057](https://github.com/nyxb/leuchter/commit/e051057))
  - **leuchter): add README.md file with usage instructions and credits 🚀 chore(leuchter): add prepublishOnly script to build package before publishing 🔧 chore(leuchter:** Add release script to generate changelog and publish package ([7a246f3](https://github.com/nyxb/leuchter/commit/7a246f3))

### 🏡 Chore

  - **.eslintrc): disable some eslint rules to improve code quality and readability 🔧 chore(leuchter:** Update package.json and tsconfig.json to improve build and development experience ([e53262a](https://github.com/nyxb/leuchter/commit/e53262a))
  - **leuchter): update package.json scripts 🚀 chore(leuchter): add @vitest/coverage-v8 package 🐛 fix(network.ts:** Update fetch endpoint URLs to use 'leuchter.nyxb.xyz' instead of 'lighter.codehike.org' for better consistency and reliability ([95a9c97](https://github.com/nyxb/leuchter/commit/95a9c97))
  - **browser.test.ts.snap:** Add snapshots for browser tests ([7c03190](https://github.com/nyxb/leuchter/commit/7c03190))
  - **cjs.test.ts.snap:** Add snapshot for cjs.test.ts ([187492d](https://github.com/nyxb/leuchter/commit/187492d))
  - **colors.test.ts.snap:** Add snapshot tests for theme colors ([678b282](https://github.com/nyxb/leuchter/commit/678b282))
  - **esm.test.ts.snap:** Add snapshots for tests in the leuchter package ([09d26f7](https://github.com/nyxb/leuchter/commit/09d26f7))
  - **scopes.test.ts.snap:** Add snapshot for highlighting with scopes in the test file ([ac75a23](https://github.com/nyxb/leuchter/commit/ac75a23))
  - **download-grammars.mjs:** Add script to download grammars from shikijs/shiki repository ([37a3785](https://github.com/nyxb/leuchter/commit/37a3785))
  - **update-languages.mjs:** Add script to update languages.mjs file ([9c6b4b8](https://github.com/nyxb/leuchter/commit/9c6b4b8))
  - **update-languages-data.mjs:** Add script to update language data in leuchter package ([a0d3aee](https://github.com/nyxb/leuchter/commit/a0d3aee))
  - **update-public-folder.mjs:** Add script to generate grammars and themes for the public folder ([b8b8ce8](https://github.com/nyxb/leuchter/commit/b8b8ce8))
  - **update.mjs:** Add script to update grammars, languages, language data, and public folder ([553b078](https://github.com/nyxb/leuchter/commit/553b078))
  - **package.json): update build and test scripts in package.json to use pnpm and specify package filter for leuchter package 🔧 chore(leuchter): update test script in leuchter package.json to include the -u flag for vitest run command 🔧 chore(leuchter:** Update rollup.config.js to replace __LIGHTER_VERSION__ with __LEUCHTER_VERSION__ ([4e8d3f8](https://github.com/nyxb/leuchter/commit/4e8d3f8))
  - **theme-colors.ts:** Rename 'lighter.inlineBackground' to 'leuchter.inlineBackground' for consistency and clarity ([3954174](https://github.com/nyxb/leuchter/commit/3954174))
  - **types.test-d.ts): rename LighterResult to LeuchterResult and AnnotatedLighterResult to AnnotatedLeuchterResult for consistency and clarity 🔀 chore(types.test-d.ts:** Update type assertions to use LeuchterResult and AnnotatedLeuchterResult for accurate type checking ([5252797](https://github.com/nyxb/leuchter/commit/5252797))
  - **web:** Add ESLint configuration file ([643376a](https://github.com/nyxb/leuchter/commit/643376a))
  - **web): add Head component to set page title, meta tags, and favicon 📦 chore(web:** Add RootLayout component to provide a basic HTML structure for the app ([76e2021](https://github.com/nyxb/leuchter/commit/76e2021))
  - **page.js:** Add new test page component ([b49183d](https://github.com/nyxb/leuchter/commit/b49183d))
  - **theme.js): add new API endpoint for fetching themes 🔒 chore(theme.js): add support for handling OPTIONS request method to enable CORS preflight requests 🔧 chore(theme.js): configure runtime as 'edge' for the theme API endpoint 🔧 chore(theme.js): set Cache-Control header to 's-maxage=1, stale-while-revalidate' for caching the response 🔧 chore(theme.js): set Access-Control-Allow-Methods header to 'GET' to allow GET requests to the API endpoint 🔧 chore(theme.js): set Access-Control-Allow-Origin header to '*' to allow requests from any origin 🐛 fix(theme.js:** Handle error cases when fetching the theme and return a 500 response with the error message ([db97c1b](https://github.com/nyxb/leuchter/commit/db97c1b))
  - **web:** Add app-build-manifest.json, build-manifest.json, and package.json to support Next.js build process ([095e6ce](https://github.com/nyxb/leuchter/commit/095e6ce))
  - **test): add test files and dependencies for leuchter package 🐛 fix(test/index.js): fix import statement for leuchter package 🐛 fix(test/memory/index.js): fix import statement for leuchter package 🐛 fix(test/test.js): fix import statements for leuchter and consolji packages ✨ feat(test/test.js:** Add code to run leuchter highlight function and display the result in a table format ([b8f58d4](https://github.com/nyxb/leuchter/commit/b8f58d4))
  - **.gitignore:** Add .next directory to the list of ignored files and directories ([c44ca44](https://github.com/nyxb/leuchter/commit/c44ca44))

### ✅ Tests

  - **colors.test.ts:** Add unit tests for getThemeColors function to ensure correct behavior ([ac2a2bf](https://github.com/nyxb/leuchter/commit/ac2a2bf))
  - **scopes.test.ts:** Add test for highlighting code with scopes ([9c08498](https://github.com/nyxb/leuchter/commit/9c08498))
  - **tokens.test.ts:** Add test to remove empty space tokens in code highlighting ([4954347](https://github.com/nyxb/leuchter/commit/4954347))

### ❤️  Contributors

- Nyxb <contact@nyxb.xyz>

