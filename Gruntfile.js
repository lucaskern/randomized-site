module.exports = function(grunt) {
  
    // Load automatically all tasks without using grunt.loadNpmTasks()
    // for each module
    require('load-grunt-tasks')(grunt);
  
  
    /* ---------------------------------------
     * Tasks configuration
     * --------------------------------------- */
    grunt.initConfig({
  
      /*
       * Paths
       */
      paths: {
        resources: '/stylesheets', // source files (scss)
        assets: '/stylesheets'       // compiled files (css)
      },
  
      /* 
       * SASS task
       */
      sass: {
  
        // For development
        dev: {
          files: {
            'stylesheets/main.css' : 'stylesheets/styles.scss'
          },
          options: {
            style: 'expanded'
          }
        },
  
        // For production
        prod: {
          files: {
            '<%= paths.assets %>/css/main.css' : '<%= paths.resources %>/sass/main.scss'
          },
          options: {
            style: 'compressed', // This option minimizes the CSS
            sourcemap: 'none'
          }
        }
  
      },
  
      /* 
       * Watch task
       */
      watch: {
        sass: {
          files: [
            'stylesheets/*.scss' // Write here the files that Grunt must watches
          ],
          tasks: ['sass:dev']
        }
      }
  
    });
  
  
    /* ---------------------------------------
     * Registered tasks
     * --------------------------------------- */
    grunt.registerTask('default', ['sass:dev']);
    grunt.registerTask('prod', ['sass:prod']);
  
  };