import { babel } from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";

export default [{
    input: 'src/index.js',
    output: [{
        name: 'RibbonCorner',
        file: 'dist/ribbon-corner.js',
        format: 'umd',
    },
    {
        file: "dist/ribbon-corner.esm.js",
        format: "esm"
    }
    ],
    plugins: [
        babel({
            exclude: '**/node_modules/**'
        }),
    ]

}, {
    input: 'src/index.js',
    output: [{
        name: 'RibbonCorner',
        file: 'dist/ribbon-corner.min.js',
        format: 'umd',
    },
    ],
    plugins: [
        babel({
            exclude: '**/node_modules/**'
        }),
        terser()
    ]
}
]
