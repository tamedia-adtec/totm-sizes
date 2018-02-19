
module.exports = function(grunt) {


grunt.initConfig({
    gitclone: {
        your_target: {
            options: {
                repository: 'https://github.com/tamedia-adtec/totm-sizes.git',
                //repositoryUrl: 'https://user:password@domain:group/project.git'
                branch: 'master',
                directory: 'temp'
            }
        }
    },
});

    grunt.loadNpmTasks('grunt-git');


    grunt.registerTask('default',[
        'gitclone:your_target'
    ]);


};
