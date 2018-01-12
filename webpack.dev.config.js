 const webpack = require("webpack");

 module.exports = {
     entry:{
         app:"./demo/index.js"
     },
     output:{
         path:__dirname,
         filename:"./demo/app.js"
     },
     module:{
         loaders:[
            {test:/\.js/,loader:"babel-loader",query:{presets:["babel-preset-react","babel-preset-stage-2",]}},
            {test:/\.css/,loader:"style-loader!css-loader"},
            {test:/\.png|jpg/,loader:"url-loader"}
         ]
     },
     devtool:"source-map"
 }