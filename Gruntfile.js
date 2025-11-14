'use strict';
// Gruntfile.js

/** @param {import("grunt")} grunt */
module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-banner");
    grunt.loadNpmTasks("grunt-concat-css");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-run");
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-shell");
    grunt.loadNpmTasks("grunt-strip-css-comments");

    grunt.registerTask(`grunt-tasks:test`, 'Test Grunt', function () {
        grunt.log.writeln(__dirname);
    })

};
