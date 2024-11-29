// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-junit-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    junitReporter: {
      outputDir: 'test-results', // Pasta onde os relatórios serão salvos
      outputFile: 'test-results.xml', // Nome do arquivo do relatório
      useBrowserName: false, // Não inclui o nome do navegador no arquivo
    },
    reporters: ['progress', 'kjhtml', 'junit'],
    browsers: ['Chrome'],
    singleRun: true,
    logLevel: config.LOG_INFO,
  });
};
