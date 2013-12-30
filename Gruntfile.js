module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: ['Gruntfile.js', 'app/**/*.js'],
      gruntfile: ['Gruntfile.js']
    },

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'dist/app.css': 'scss/app.scss'
        }
      }
    },

    concat: {
      dist: {
        src: ['app/app.js', 'app/**/*.js', 'tmp/templates.js'],
        dest: 'dist/application.js'
      }
    },

    emberTemplates: {
      compile: {
        options: {
        templateBasePath: 'templates/'
        },
        files: {
          'tmp/templates.js': "templates/**/*.handlebars"
        }
      }
    },

    qunit: {
      all: ['test/**/*.html']
    },

    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile'],
      },

      build: {
        files: ['app/**/*.js', 'test/**/*.js', 'templates/**/*.handlebars'],
        tasks: ['build']
      },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['emberTemplates', 'concat']);

};