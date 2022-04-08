module.exports = function(api) {
  let isTestEnv = api.env('test');

  let modules = [
    'react-spring',
    '@react-aria',
    '@internationalized',
    '@react-spectrum',
    '@react-stately',
    'd3.*'
  ];
  let exclude = new RegExp(`node_modules/(?!(${modules.join('|')})/).*`);
  return {
    exclude,
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          targets: {
            browsers: ['> 1%, not ie 11, not op_mini all']
          }
        }
      ],
      [
        '@babel/preset-react',
        {
          useBuiltIns: true,
          runtime: 'automatic',
        }
      ]
    ]
  };
};
