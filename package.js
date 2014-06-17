Package.describe({
  summary:'console-global-helper 拓展全局Helper，提供语言中常用的console.log打印对象'
});

Package.on_use(function(api){
  api.use('underscore','client');
  api.use('templating');
  api.use('ui','client');
  api.add_files('console.js','client');
});