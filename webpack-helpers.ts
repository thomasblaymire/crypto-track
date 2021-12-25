

export const getSVGLoader = () => ({
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
      options: {
        svgoConfig: {
          plugins: {
            removeViewBox: false,
          },
        },
      },
    },
  ],
});