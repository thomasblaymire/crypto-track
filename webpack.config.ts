import path from 'path';
import webpack from 'webpack';
import { getSVGLoader } from './webpack-helpers';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const port = process.env.PORT || 4000;

const createWebpackConfig = async () => {
  return {
    entry: './src/index.tsx',
    mode: 'development',
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
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
      new webpack.HotModuleReplacementPlugin(),
      new CopyPlugin({
        patterns: [{ from: 'src/assets', to: '' }],
      }),
    ],
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.[fullhash].js',
    },
    devServer: {
      static: path.join(__dirname, 'dist'),
      compress: true,
      port: port,
      historyApiFallback: true,
      open: true,
      hot: true,
    },
  };
};

export default createWebpackConfig;
