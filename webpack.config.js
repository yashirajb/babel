// This file will specify webpack setup


const path = require('path');


//this js runs directly on the computer aided by nodeJS, cannot run this on the browser
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    }
}; 