module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      options: {
        paths: ['assets/less']
      },
      development: {
        files: {
          'css/blog.css': 'assets/less/blog.less'
        }
      },
      production: {
        options: {
          compress: true
        },
        files: {
          'css/blog.css': 'assets/less/blog.less'
        }
      }
    },
    watch: {
      sass: {
        files: 'assets/less/*.less',
        tasks: ['less:development']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
};