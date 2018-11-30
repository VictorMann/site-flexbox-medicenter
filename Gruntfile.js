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
        },
        browserSync: {
            options: {
                watchTask: true,
                server: {
                    baseDir: "./"
                }
            },
            public: {
                bsFiles: {
                    src: ['**/*']
                }
            }
        }
    });

    // register tasks
    grunt.registerTask('default', ['clean', 'watch']);
    grunt.registerTask('server', ['browserSync', 'watch']);

    // loading tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
}