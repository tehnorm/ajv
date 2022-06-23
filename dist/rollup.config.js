import commonjs from "@rollup/plugin-commonjs"
import {nodeResolve} from "@rollup/plugin-node-resolve"
import json from "@rollup/plugin-json"
import typescript from "@rollup/plugin-typescript"
import {terser} from "rollup-plugin-terser"


export default {
    input: `./ajv.js`,
    output: [
      {
        file: `../test.cjs.bundle.js`,
        format: "es",
        esModule: false,
	exports: 'named',
        name: 'Ajv',
      },
    ],
    plugins: [commonjs(), nodeResolve(), json()],
  }
