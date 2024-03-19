// purpose:use grunt to compile sass and compress js

//http://gruntjs.com/plugins 
//----3 parts----
//part1: Configuration
//configures our tasks and tells plugins where to find certain files
//part 2:Load pludins into the file(eg:uglify)---we use node functions to replace the functionality of the plugins
//part 3: Register tasks

const { exec } = require('child_process');
const fs = require('fs');
const UglifyJS = require('uglify-js');

module.exports = function (grunt) {
    
    grunt.initConfig({
        sass_compile: {
            build: {
                command: 'node-sass src/scss/styles.scss dist/css/styles.css'
            }
        }
    });

    grunt.registerTask('sass_compile', 'Compile Sass files to CSS', function () {
        const done = this.async();
        const command = grunt.config.get('sass_compile.build.command');

        exec(command, (error, stdout, stderr) => {
            if (error) {
                grunt.log.error(`Sass compilation error: ${error.message}`);
                done(false);
                return;
            }
            if (stderr) {
                grunt.log.error(`Sass compilation error: ${stderr}`);
                done(false);
                return;
            }
            grunt.log.writeln(`Sass compiled successfully: ${stdout}`);
            done();
        });
    });

    grunt.registerTask('uglify_js', 'Compress JavaScript files', function () {
        const done = this.async();
        const sourceFile = 'src/js/script.js';
        const destinationFile = 'dist/js/script.js';

        fs.readFile(sourceFile, 'utf8', (err, data) => {
            if (err) {
                grunt.log.error(`Error reading source file: ${err.message}`);
                done(false);
                return;
            }

            const result = UglifyJS.minify(data);

            if (result.error) {
                grunt.log.error(`JavaScript compression error: ${result.error}`);
                done(false);
                return;
            }

            fs.writeFile(destinationFile, result.code, 'utf8', (err) => {
                if (err) {
                    grunt.log.error(`Error writing destination file: ${err.message}`);
                    done(false);
                    return;
                }

                grunt.log.writeln(`JavaScript compressed successfully: ${destinationFile}`);
                done();
            });
        });
    });


    grunt.registerTask('default', ['sass_compile', 'uglify_js']);
};
