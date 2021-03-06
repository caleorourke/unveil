/*
 * Gruntfile.js
 *
 * Grunt provides configuration for tasks and npm extensions. It reads JSON data from package.json
 * and YAML data from config.yml. Do not edit existing tasks until you are familiar with how each works.
 * Learn more at http://gruntjs.com.
 *
 */

module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    site: grunt.file.readYAML('_config.yml'),
    banner: '/* \n' +
            ' * Copyright 2015-<%= grunt.template.today(\'yyyy\') %> <%= site.title %>\n' +
            ' * \n' +
            ' * Updated <%= grunt.template.today(\'yyyy.mm.dd\') %>\n' +
            ' * Code and documentation licensed under the <%= site.license %> license\n' +
            ' * \n' +
            ' */\n',

    shell: {
      gems: {
        command: ['gem update --system --no-document',
                  'gem install github-pages'].join('&&'),
        options: {
          stdout: true
        }
      }
    },

    clean: {
      assets: ['assets/css/main.min.css',
               'assets/js/main.min.js',
               'assets/js/plugin.min.js']
    },

    concat: {
      vendors: {
        src: ['js/plugins/jquery-easing.js',
              'js/plugins/jquery-display.js',
              'js/plugins/jquery-nav.js',
              'js/plugins/jquery-flexslider.js',
              'js/plugins/jquery-sticky.js',
              'js/plugins/jquery-as-pie-progress.js',
              'js/plugins/jquery-lettering.js',
              'js/plugins/jquery-textillate.js',
              'js/plugins/jquery-debounce.js',
              'js/plugins/bootstrap-transition.js',
              'js/plugins/bootstrap-modal.js'],
        dest: 'assets/js/plugin.min.js'
      },

      main: {
        options: {
          banner: '<%= banner %>'
        },
        src: ['js/textillate.js',
              'js/useragent.js',
              'js/touchevents.js',
              'js/scrollevents.js',
              'js/effects.js'],
        dest: 'assets/js/main.min.js'
      }
    },

    uglify: {
      vendors: {
        options: {
          report: 'min'
        },
        src: '<%= concat.vendors.dest %>',
        dest: 'assets/js/plugin.min.js'
      },

      main: {
        options: {
          banner: '<%= banner %>',
          report: 'min'
        },
        src: '<%= concat.main.dest %>',
        dest: 'assets/js/main.min.js'
      }
    },

    recess: {
      unminify: {
        options: {
          compile: true,
          compress: false,
          banner: '<%= banner %>'
        },
        src: ['less/@main.less'],
        dest: 'assets/css/main.min.css'
      },
      minify: {
        options: {
          compile: true,
          compress: true,
          banner: '<%= banner %>'
        },
        src: ['<%= recess.unminify.src %>'],
        dest: '<%= recess.unminify.dest %>'
      }
    },

    pages: {
      test: {},
      start: {
        options: {
          watch: true,
          serve: true,
          baseurl: ['\'\'']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-csscomb');
  grunt.loadNpmTasks('grunt-jekyll-pages');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('build',   ['clean', 'concat', 'uglify', 'recess:minify']);
  grunt.registerTask('install', ['shell:gems']);
  grunt.registerTask('serve',   ['build', 'pages:start']);
  grunt.registerTask('test',    ['pages:test']);
};
