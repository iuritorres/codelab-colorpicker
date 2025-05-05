import path from 'path'

import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
import { chromeExtension, simpleReloader } from 'rollup-plugin-chrome-extension'
import { emptyDir } from 'rollup-plugin-empty-dir'
import css from 'rollup-plugin-import-css'
import zip from 'rollup-plugin-zip'

const isProduction = process.env.NODE_ENV === 'production'

/** @type {import('rollup').RollupOptions} */
const options = {
  input: ['src/manifest.json'],
  output: {
    dir: 'dist',
    format: 'esm',
    chunkFileNames: path.join('chunks', '[name]-[hash].js'),
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': isProduction
        ? JSON.stringify('production')
        : JSON.stringify('development'),
      preventAssignment: true,
    }),
    chromeExtension(),
    simpleReloader(),
    resolve(),
    commonjs(),
    typescript(),
    emptyDir(),
    css({
      alwaysOutput: true,
      inject: true,
      minify: true,
    }),
    isProduction && zip({ dir: 'releases' }),
  ],
}

export default options
