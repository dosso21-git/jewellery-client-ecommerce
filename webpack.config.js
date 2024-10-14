import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: 'production',
  entry: './src/index.jsx',  // Ensure this is correct
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,  // Match both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Use babel-loader
        },
      },
      // Add additional loaders here if needed
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Resolve these extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Ensure this file exists
      filename: 'index.html',
    }),
  ],
};
