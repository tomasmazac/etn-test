module.exports = (grunt) ->

# Import #####################################################################

  require('jit-grunt')(grunt)

  # Konfigurace ################################################################

  grunt.initConfig

    postcss:
      options:
        processors: [
          require('autoprefixer')({
            browsers: ['last 4 versions']
          }),
          require('pixrem')({
            rootValue: 8
            atrules: true
          }),
          require('cssnano')()
        ]
      dist:
        src: 'dist/styles/main.css'

    concat:
      scripts:
        src: [
          'node_modules/apollo.js/dist/apollo.min.js'
          'node_modules/lory.js/dist/lory.min.js'
        ]
        dest: 'scripts/vendor.js'

    browserSync:
      bsFiles:
        src : '**/*.css'
      options:
        server:
          baseDir: "./dist/"

  # Úlohy ######################################################################

  grunt.registerTask 'css', ['postcss']
  grunt.registerTask 'concatJs', ['concat:scripts']
  grunt.registerTask 'bs', ['browserSync']