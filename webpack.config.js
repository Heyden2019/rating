const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: ['@babel/polyfill', './src/main/resources/js/macrorating.js'],
    output: {
        path: path.join(__dirname, 'src/main/resources/js_ES5'),
        filename: 'macrorating.js',
        publicPath: path.join(__dirname, 'src/main/resources/js_ES5')
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: { presets: ['@babel/preset-env'] }
                    }
                ]
            }
        ]
    }
}