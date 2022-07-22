import path from 'path';
import webpack from 'webpack';
import { getSVGLoader } from './webpack-helpers';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const port = process.env.PORT || 3000;

require('dotenv').config();

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
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
        },
        getSVGLoader(),
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
      new webpack.EnvironmentPlugin([
        'COINGEKO_API',
        'BACKEND_API',
        'AUTH_URL',
      ]),
      new webpack.HotModuleReplacementPlugin(),
      new CopyPlugin({
        patterns: [{ from: 'src/assets', to: '' }],
      }),
    ],
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        // 'react-dom': '@hot-loader/react-dom',
        '@': path.resolve(__dirname, 'src'),
        '@context': path.resolve(__dirname, 'src/context'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@helpers': path.resolve(__dirname, 'src/helpers'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
      },
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[fullhash].js',
      publicPath: '/',
    },
    devServer: {
      static: path.join(__dirname, 'dist'),
      compress: true,
      port: port,
      historyApiFallback: true,
      open: true,
      hot: true,
      allowedHosts: ['crypto.dev'],
    },
  };
};

export default createWebpackConfig;
