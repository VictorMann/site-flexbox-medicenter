module.exports = function(grunt) {
    grunt.initConfig({
        clean: {
            dist: {
                src: 'assets/css'
            }
        },
        less: {
            compilar: {
                cwd: 'assets/less',
                src: ['**/*.less'],
                dest: 'assets/css',
                ext: '.css',
                expand: true
            }
        },
        watch: {
            less: {
                options: {
                    event: ['added', 'changed']
                },
                files: 'assets/less/**/*.less', 
                tasks: 'less:compilar'
            }
        }
    });

    // register tasks
    grunt.registerTask('default', ['clean', 'watch']);

    // loading tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
}