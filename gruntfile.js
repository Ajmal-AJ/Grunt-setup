module.exports = function (grunt) {
    grunt.initConfig({

        htmlmin: {
            dist: {
              options: {
                removeComments: true,
                collapseWhitespace: true,
                
              },
              files: {
                'pages/index.html': 'index.html'
              }
            }
          },

        cssmin: {
            target: {
                options: {
                    keepSpecialComments: 0
                  },
              files: {
                'minifiedcss/style.min.css': [
                    
                    'css/style.css', 
                    'css/header.css',
                ]
              }
            }
          },
          
          uglify: {
            target: {
              files: {
                'minifiedjs/script.min.js': 'js/script.js'
              }
            }
          },


        watch: {
            css: {
              files: ['css/style.css'],
              tasks: ['cssmin']
            },
            js: {
              files: ['js/script.js'],
              tasks: ['uglify']
            }
          }
    });
  
    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
  
    // Define your tasks here
    grunt.registerTask('default', ['cssmin', 'uglify','htmlmin']);
  };