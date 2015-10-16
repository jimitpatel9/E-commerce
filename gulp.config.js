/**
 * Created by FED Dev User on 9/16/2015.
 */
module.exports = function(){
    var config = {
        client: './',
        index:'./index.html',
        js:[
            './js/**/*.js',
            '!'+'./js/vendor/*.js',
            '!'+'./js/angular/*.js',
            './css/*.css'
        ],
        bower:{
            json:require('./bower.json'),
            directory:'./bower_components',
            ignorePath:'../..'

        }
    };
    config.getWiredepDefaultOptions = function(){
        var options={
            bowerJson:config.bower.json,
            directory:config.bower.directory,
            ignorePath:config.bower.ignorePath
        }
        return options;
    };
    return config;
}