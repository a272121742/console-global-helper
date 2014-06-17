console-global-helper（模板控制台）
===============================

为了方便打印模板中一些helper或者变量的值，提供此包以供在Template中现实数据。其功能参考JavaScript中的console变量的部分功能。

##  使用方法

### 正确的使用方法

```html
{{console.log varName}}
{{console.dir varObj.attr}}
```

### 错误的使用方法

```html
{{> console.log varName}}
{{# console.dir varObj.attr}}{{/console.dir}}
{{console.log x=1 y=2}}
{{console.dir varObj x=1}}
```

##  功能讲解

### {{console.log}}

同`JavaScript`中的`console.log`，打印一个对象的`值`，并且会显示`对象类型`和`继承类`。

```html
{{console.log attr}}
```

### {{console.dir}}

同`JavaScript`中的`console.dir`，打印一个对象的`深层堆栈`，并且显示`对象类型`和`继承类`。

```html
{{console.dir obj}}
```

### {{console.info}}

同`JavaScript`中的`console.info`，仅打印一个对象的`值`。

```html
{{console.info attr}}
```

### {{console.warn}}  /  {{console.warning}}

同`JavaScript`中的`console.warn`，仅以警告形式打印一个对象的`值`。

```html
{{console.warn attr}}
{{console.warning attr}}
```

### {{console.error}}  /  {{console.err}}

同`JavaScript`中的`console.error`，仅以错误形式打印一个对象的`值`。

```html
{{console.error attr}}
{{console.err attr}}
```

### {{console.success}}

以成功形式打印一个对象的`值`。

```html
{{console.success attr}}
```

### {{console.time}} & {{console.timeEnd}}

同`JavaScript`中的`console.time`和`console.timeEnd`，打印两段代码之间的执行时间，参数是一个唯一的计时标记。

```html
{{console.time 'clockName'}}
  <!--其他模板代码-->
{{console.timeEnd 'clockName'}}
```

### {{console.profile}} & {{console.profileEnd}}

同`JavaScript`中的`console.profile`和`console.profileEnd`，打印两段代码之间的执行情况并做效率统计，参数是一个唯一的监测标记。

```html
{{console.profile 'profileName'}}
  <!--其他模板代码-->
{{console.profileEnd 'profileName'}}
```

##  其他功能

暂无需求，有待开发！