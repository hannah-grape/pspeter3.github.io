module.exports = function(grunt) {
  grunt.initConfig({
    compass: {
      options: {
        basePath: 'assets',
        require: 'zurb-foundation',
        sassDir: 'sass',
        cssDir: '../css',
        imagesDir: 'img',
        fontsDir: 'fonts',
        httpPath: '/'
      },
      dist: {
        options: {
          debugInfo: true
        }
      }
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