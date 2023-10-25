# grunt setup  installation

1.  install Node.js on system,
2. install grunt  using cmd
    - npm install -g grunt-cli

3. create package.json file 
    - npm init

4. grunt have plugins for each funcionality
    - grunt grunt-contrib-cssmin  :- for minifying css files
    - grunt-contrib-uglify -  :- minifying js files
    - grunt grunt-contrib-sass : - minifying sass files
    - grunt grunt-contrib-jshint : - for validation in code
    - grunt-contrib-watch :- recreating min file autoamtically when any file changing

    *** installation comment ****

    "npm install 'plugin name' --save-dev"

5. create gruntfile.js in project directory 
6. add intial setup code in grunt file

    module.exports = function (grunt) {
    grunt.initConfig({
        // Your Grunt configurations and tasks go here
    });

    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Define your tasks here
    grunt.registerTask('default', ['cssmin', 'uglify']);
    }; 


7. running grunt file type grunt in cmd
    - grunt


- css minify code 
===========================================
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

        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.registerTask('default', ['cssmin',]);


================================================

- js minify code 
=================================================
 uglify: {
            target: {
              files: {
                'minifiedjs/script.min.js': 'js/script.js'
              }
            }
          },

          grunt.loadNpmTasks('grunt-contrib-uglify');
            grunt.registerTask('default', ['uglify',]);
============================================================
* HTML  minify code 

============================================================
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

          grunt.loadNpmTasks('grunt-contrib-htmlmin');
           grunt.registerTask('default', ['htmlmin',]);

==============================================================

* sass minify code 
============================================
 sass: {
      options: {
        style: 'expanded'
      },
      dist: {
        files: {
          'dist/styles.css': 'src/styles.scss'
        }
      }
    },

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['sass',]);
===================================================


# grunt file demo

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
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Define your tasks here
    grunt.registerTask('default', ['cssmin', 'uglify','htmlmin','watch]);
  };

===============================
watch 
watch: {
      scripts: {
        files: ['src/**/*.js', 'styles/**/*.css'], // Specify the files to watch
        tasks: ['jshint', 'csslint'], // Specify the tasks to run when files change
        options: {
          spawn: false // Set to false to improve performance on Windows systems
        }
      }
    },
========================================================
  for refrence visit the https://gruntjs.com/getting-started