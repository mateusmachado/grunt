module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-concat");

 grunt.initConfig({
      concat: {
        dist: {
            src: ["src/js/initial.js", "src/js/b.js"]
          , dest: "assets/js/app.js"
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');  

  grunt.registerTask("default", ["concat"]);      

};
