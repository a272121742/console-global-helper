(function(){
  UI.registerHelper('console', function(){
    return {
      log : function(obj){
        var obj = obj instanceof Spacebars.kw ? undefined : obj;
        console.log('%c 模板控制台 %c console%c.%c%s %c--> %ctype:%s %s value:%O', 'color:#fff;background:rgba(65,91,118,1)', 'color:black', 'color:#bcc3ca', 'color:#34495e', 'log', 'color:black', 'color:#34495e', typeof obj, toString.call(obj), obj);
      },
      dir : function(obj){
        var obj = obj instanceof Spacebars.kw ? undefined : obj;
        console.log('%c 模板控制台 %c console%c.%c%s %c--> %ctype:%s %s', 'color:#fff;background:rgba(65,91,118,1)', 'color:black', 'color:#bcc3ca', 'color:#34495e', 'dir', 'color:black', 'color:#34495e', typeof obj, toString.call(obj));
        console.dir(obj);
      },
      warn : function(obj){
        var obj = obj instanceof Spacebars.kw ? undefined : obj;
        console.log('%c 模板控制台 %c console%c.%c%s %c--> %c', 'color:#fff;background:rgba(65,91,118,1)', 'color:black', 'color:#bcc3ca', 'color:#f16e42', 'warning', 'color:black', 'color:#f16e42', obj);
      },
      warning : function(obj){
        this.warn(obj);
      },
      error : function(obj){
        var obj = obj instanceof Spacebars.kw ? undefined : obj;
        console.log('%c 模板控制台 %c console%c.%c%s %c--> %c', 'color:#fff;background:rgba(65,91,118,1)', 'color:black', 'color:#bcc3ca', 'color:#cb2028', 'error', 'color:black', 'color:#cb2028', obj);
      },
      err : function(obj){
        this.error(obj);
      },
      success : function(obj){
        var obj = obj instanceof Spacebars.kw ? undefined : obj;
        console.log('%c 模板控制台 %c console%c.%c%s %c--> %c', 'color:#fff;background:rgba(65,91,118,1)', 'color:black', 'color:#bcc3ca', 'color:#2ecc71', 'success', 'color:black', 'color:#2ecc71', obj);
      },
      info : function(obj){
        var obj = obj instanceof Spacebars.kw ? undefined : obj;
        console.log('%c 模板控制台 %c console%c.%c%s %c--> %c', 'color:#fff;background:rgba(65,91,118,1)', 'color:black', 'color:#bcc3ca', 'color:#1abc9c', 'info', 'color:black', 'color:#1abc9c', obj);
      },
      time : function(obj){
        var obj = '计时器：' + (_.isString(obj) ? obj.valueOf() : (this.timestamp = Date.now().toString(), this.timestamp));
        console.time(obj);
      },
      timeEnd : function(obj){
        var obj = '计时器：' + (_.isString(obj) ? obj.valueOf() : this.timestamp);
        if(!obj){
          throw new Meteor.Error('10000','参数配置错误','time 和 timeEnd应该成对出现，且参数名相同');
        }
        console.timeEnd(obj);
        this.timestamp = undefined;
      },
      profile : function(obj){
        var a = new Date();
        console.profile('性能分析器 :' + (new Date()).toLocaleString());
      },
      profileEnd : function(){
        console.profileEnd();
      },
      table : function(obj){
        var obj = obj instanceof Spacebars.kw ? undefined : obj;
        console.table(obj);
      },
      trace : function(){
        console.trace();
      },
      clear : function(){
        console.clear();
      }
    };
  });
})();
