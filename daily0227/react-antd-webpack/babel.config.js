// babel.config.js
module.exports = {
    //plugins: ['@babel/plugin-transform-arrow-functions']
    //presets: ['@babel/preset-es2015']
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    chrome: '58'
                }
            }
        ]
    ],
    //plugins: ['@babel/plugin-transform-runtime']
    plugins: [
        ['@babel/plugin-transform-runtime', { corejs: 2 }]
    ]
};