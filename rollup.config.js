import scss from 'rollup-plugin-scss';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import path from 'path';
import includePaths from 'rollup-plugin-includepaths';
import json from '@rollup/plugin-json';
// import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import copy from 'rollup-plugin-copy';
import webWorkerLoader from 'rollup-plugin-web-worker-loader';

export default {
  input: [
    'src/index.js'
  ],
  output: [
    {
      file: 'build/index.js',
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      preventAssignment: true
    }),
    webWorkerLoader({
      targetPlatform: 'browser',
      sourceMap: true
    }),
    babel({
      babelHelpers: 'bundled',
      configFile: path.resolve(__dirname, 'babel.config.js')
    }),
    resolve({ browser: true }),
    commonjs({
      include: /node_modules/,
      sourceMap: true
    }),
    includePaths({
      paths: ['src']
    }),
    json({ compact: true }),
    scss({
      output: 'build/index.css'
    }),
    // terser(),
    copy({
      targets: [
        { src: 'public/**', dest: 'build' },
      ],
      verbose: true
    }),
    serve({
      open: false,
      verbose: true,
      historyApiFallback: true,
      contentBase: 'build',
      host: 'localhost',
      port: 3000
    })
  ]
};
