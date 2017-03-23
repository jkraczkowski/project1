module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        watch: {
            sass: {
                // We watch and compile sass files as normal but don't live reload here
                files: ['sass/*.sass'],
                tasks: ['sass'],
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'fotografie/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/build/'
                }]
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/main.css': 'sass/main.sass'
                }
            }
        },
        browserSync: {
            bsFiles: {
                src : 'css/*.css'
            },
            options: {
                server: {
                    baseDir: "C:/Users/Lenovo/Desktop/niczi-stronka/projekt_malwa/"
                }
            }
        }
    });
    // Load the plugins tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    // Default task(s).
    grunt.registerTask('default', ["sass", "imagemin", "watch", "browserSync"]);
};
