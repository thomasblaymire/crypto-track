export const getSVGLoader = () => ({
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
      options: {
        svgo: {
          plugins: [{ removeViewBox: false }],
        },
      },
    },
  ],
});
