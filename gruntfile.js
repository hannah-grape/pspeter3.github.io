module.exports = function(grunt) {
  grunt.initConfig({
    compass: {
      options: {
        basePath: 'assets',
        sassDir: 'sass',
        cssDir: '../css',
        imagesDir: 'img',
        fontsDir: 'fonts',
        httpPath: '/'
      },
      dist: {}
    },
    watch: {
      sass: {
        files: 'assets/sass/*.scss',
        tasks: ['compass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};