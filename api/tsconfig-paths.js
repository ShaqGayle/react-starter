const tsConfigPaths = require('ts-config-paths');
const tsConfig = require('./tsconfig.json.js');

tsConfigPaths.register({
    baseUrl: tsConfig.compilerOptions.outDir,
    paths: tsConfig.compilerOptions.paths,
})