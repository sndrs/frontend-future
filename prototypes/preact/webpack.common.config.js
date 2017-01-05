const path = require('path');

module.exports = {
  publicPath: '/assets/',
  assetsPath: path.join(__dirname, 'dist', 'assets'),
  commonLoaders:[
    {
      test: /\.jsx?$/,
      loader: 'babel',
      include: [
        path.join(__dirname),
        path.join(__dirname, '..', 'data.js'),
      ],
      plugins: [
        ['transform-react-jsx', { pragma:'h' }],
      ],
    },
  ],
};
