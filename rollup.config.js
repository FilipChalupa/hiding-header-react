import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { rmSync } from 'fs'
import path from 'path'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import preserveDirectives from 'rollup-plugin-preserve-directives'
import typescript from 'rollup-plugin-typescript2'
import packageJson from './package.json' with { type: 'json' }

const outputDirectory = path.parse(packageJson.main).dir

export default {
	input: './src/index.ts',
	output: {
		dir: outputDirectory,
		format: 'esm',
		sourcemap: true,
		preserveModules: true,
	},
	external: ['react', 'hiding-header'],
	onwarn(warning, warn) {
		// Directives are kept by preserveDirectives()
		if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return
		warn(warning)
	},
	plugins: [
		{
			name: 'clean',
			buildStart: () =>
				rmSync(outputDirectory, { recursive: true, force: true }),
		},
		peerDepsExternal(),
		resolve(),
		commonjs(),
		typescript(),
		preserveDirectives(),
	],
}
