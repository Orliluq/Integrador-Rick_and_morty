module.exports = {
    // ...
    module: {
      rules: [
        // ...
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
    // ...
  };
  