(function(){
  var disabled = false;
  var _console = {
      log : function(obj){
        var obj = obj instanceof Spacebars.kw ? undefined : obj;
        if(!disabled){
          console.log('%c 模板控制台 %c console%c.%c%s %c--> %ctype:%s %s value:%O', 'color:#fff;background:rgba(65,91,118,1)', 'color:black', 'color:#bcc3ca', 'color:#34495e', 'log', 'color:black', 'color:#34495e', typeof obj, toString.call(obj), obj);
        }
      },
      dir : function(obj){
        var obj = obj instanceof Spacebars.kw ? undefined : obj;
        if(!disabled){
          console.log('%c 模板控制台 %c console%c.%c%s %c--> %ctype:%s %s', 'color:#fff;background:rgba(65,91,118,1)', 'color:black', 'color:#bcc3ca', 'color:#34495e', 'dir', 'color:black', 'color:#34495e', typeof obj, toString.call(obj));
          console.dir(obj);
        }
      },
      warn : function(obj){
        var obj = obj instanceof Spacebars.kw ? undefined : obj;
        if(!disabled){
          console.log('%c 模板控制台 %c console%c.%c%s %c--> %c', 'color:#fff;background:rgba(65,91,118,1)', 'color:black', 'color:#bcc3ca', 'color:#f16e42', 'warning', 'color:black', 'color:#f16e42', obj);
        }
      },
      warning : function(obj){
        this.warn(obj);
      },
      error : function(obj){
        var obj = obj instanceof Spacebars.kw ? undefined : obj;
        if(!disabled){
          console.log('%c 模板控制台 %c console%c.%c%s %c--> %c', 'color:#fff;background:rgba(65,91,118,1)', 'color:black', 'color:#bcc3ca', 'color:#cb2028', 'error', 'color:black', 'color:#cb2028', obj);
        }
      },
      err : function(obj){
        this.error(obj);
      },
      success : function(obj){
        var obj = obj instanceof Spacebars.kw ? undefined : obj;
        if(!disabled){
          console.log('%c 模板控制台 %c console%c.%c%s %c--> %c', 'color:#fff;background:rgba(65,91,118,1)', 'color:black', 'color:#bcc3ca', 'color:#2ecc71', 'success', 'color:black', 'color:#2ecc71', obj);
        }
      },
      info : function(obj){
        var obj = obj instanceof Spacebars.kw ? undefined : obj;
        if(!disabled){
          console.log('%c 模板控制台 %c console%c.%c%s %c--> %c', 'color:#fff;background:rgba(65,91,118,1)', 'color:black', 'color:#bcc3ca', 'color:#1abc9c', 'info', 'color:black', 'color:#1abc9c', obj);
        }
      },
      time : function(obj){
        var obj = '计时器：' + (_.isString(obj) ? obj.valueOf() : (this.timestamp = Date.now().toString(), this.timestamp));
        if(!disabled){
          console.time(obj);
        }
      },
      timeEnd : function(obj){
        var obj = '计时器：' + (_.isString(obj) ? obj.valueOf() : this.timestamp);
        if(!obj){
          throw new Meteor.Error('10000','参数配置错误','time 和 timeEnd应该成对出现，且参数名相同');
        }
        if(!disabled){
          console.timeEnd(obj);
        }
        this.timestamp = undefined;
      },
      profile : function(obj){
        var a = new Date();
        if(!disabled){
          console.profile('性能分析器 :' + (new Date()).toLocaleString());
        }
      },
      profileEnd : function(){
        if(!disabled){
          console.profileEnd();
        }
      },
      table : function(obj){
        var obj = obj instanceof Spacebars.kw ? undefined : obj;
        if(!disabled){
          console.table(obj);
        }
      },
      trace : function(){
        if(!disabled){
          console.trace();
        }
      },
      clear : function(){
        if(!disabled){
          console.clear();
        }
      },
      enable : function(){
        disabled = false;
      },
      disable : function(){
        disabled = true;
      }
    };
  UI.registerHelper('console', function(){
    var Constructor = arguments.callee;
    if(Constructor.__instance__ != undefined){
      return Constructor.__instance__;
    }
    _.extend(this, _console);
    Constructor.__instance__ = this;
    return this;
  });
})();
