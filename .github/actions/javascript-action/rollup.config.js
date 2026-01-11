import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default [
  {
  // INPUT OPTIONS
  input: 'main.js',
  // Specifies the entry point of your application
  // This is where Rollup starts bundling from
  // In your case, it's the main.js file that contains your action code

  // OUTPUT OPTIONS
  output: {
    file: 'dist/main.js',
        // The destination file where the bundled code will be written
        // All your code and dependencies will be combined into this single file
    format: 'cjs',
        // The module format of the output file
        // Options:
        // - 'cjs' (CommonJS) - for Node.js (what GitHub Actions uses)
        // - 'esm' (ES Module) - for modern browsers/Node.js with ES modules
        // - 'iife' (Immediately Invoked Function Expression) - for browsers
        // - 'umd' (Universal Module Definition) - works everywhere
        // - 'amd' (Asynchronous Module Definition)
    sourcemap: true
        // Generates a source map file (dist/index.js.map)
        // Helps with debugging by mapping bundled code back to original source
        // Set to false if you don't need source maps
  },
  //PLUGINS
  plugins: [
    json(),
        // Allows you to import JSON files as modules
        // Example: import pkg from './package.json'
    resolve({
      preferBuiltins: true
            // Resolves node_modules dependencies
            // preferBuiltins: true means if there's both a built-in Node module
            // and an npm package with the same name, use the built-in one
            // Example: 'fs' will use Node's built-in fs module, not an npm package
    }),
    commonjs()
        // Converts CommonJS modules (require/module.exports) to ES6
        // Many npm packages still use CommonJS
        // This plugin allows Rollup to bundle them properly
  ]
  },{
        input: 'postAction.js',
        output: {
          file: 'dist/postAction.js',
          format: 'cjs',
          sourcemap: true
        },
        plugins: [json(), resolve({ preferBuiltins: true }), commonjs()]
      }
];