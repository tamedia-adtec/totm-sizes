
module.exports = function(grunt) {


grunt.initConfig({
    gitclone: {
        your_target: {
            options: {
                repository: 'https://github.com/tamedia-adtec/fatBooty.git',
                directory: 'temp'
            }
        }
    },
})

    grunt.loadNpmTasks('grunt-git');


    grunt.registerTask('default',[
        'gitclone:your_target'
    ]);


};