const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devtool: 'source-map', // Enable sourcemaps for debugging webpack's output.
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.tsx?$/, loader: 'ts-loader' },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: 'source-map-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      { test: /\.(js)$/, use: 'babel-loader' },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  // исходник
  //   new HtmlWebpackPlugin({
  //     title: 'webpack Boilerplate',
  //     template: path.resolve(__dirname, './src/index.html'), // шаблон
  //     filename: 'index.html', // название выходного файла
  // }),

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/components/html/index.html'), // какой файл обрабатываем?
      filename: 'index.html', // результат - название выходного файла
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        './src/components/html/secondPage.html',
      ), // какой файл обрабатываем?
      filename: 'secondPage.html', // результат - название выходного файла
    }),
    new CleanWebpackPlugin(),
  ],

  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
