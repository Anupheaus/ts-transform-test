const nodeExternals = require('webpack-node-externals');
const transformer = require('ts-transformer-json-schema/transformer').default;

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      options: {
        compiler: 'ttypescript',
        getCustomTransformers: program => ({
          before: [transformer(program)]
        }),
        onlyCompileBundledFiles: true,
        compilerOptions: {
          noEmit: false,
        },
      },
    }],
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'node',
};
