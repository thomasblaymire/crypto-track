import path from 'path';
import { getSVGLoader } from './webpack-helpers';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import entry from './src/index';

const createProductionWebpackConfig = async () => {
  return {
    entry: entry,
    mode: 'production',
    output: {
      // We want to create the JavaScript bundles under a
      // 'static' directory
      filename: 'static/[name].[fullhash].js',
      // Absolute path to the desired output directory. In our
      //case a directory named 'dist'
      // '__dirname' is a Node variable that gives us the absolute
      // path to our current directory. Then with 'path.resolve' we
      // join directories
      // Webpack 4 assumes your output path will be './dist' so you
      // can just leave this
      // entry out.
      path: path.resolve(__dirname, 'dist'),
    },
    // Change to production source maps
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        },
        getSVGLoader(),
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                // Allows to configure how many loaders
                // before css-loader should be applied
                // to @import(ed) resources
                importLoaders: 1,
                localsConvention: 'camelCase',
                // Create source maps for CSS files
                sourceMap: true,
              },
            },
            {
              // PostCSS will run before css-loader and will
              // minify and autoprefix our CSS rules.
              loader: 'postcss-loader',
            },
          ],
        },
      ],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true,
          },
          vendor: {
            chunks: 'initial',
            test: 'vendor',
            name: 'vendor',
            enforce: true,
          },
        },
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),

      new CopyPlugin({
        patterns: [{ from: 'src/assets', to: '' }],
      }),

      // Create the stylesheet under 'styles' directory
      new MiniCssExtractPlugin({
        filename: 'styles/styles.[hash].css',
      }),
    ],
  };
};

export default createProductionWebpackConfig;
