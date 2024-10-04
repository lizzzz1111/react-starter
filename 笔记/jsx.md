# jsx
jsx：js与XML的缩写，表示在js代码中编写HTML的模板结构
jsx是js的语法扩展，**本身不能被浏览器识别**，需要通过解析工具之后才能在浏览器中运行
**优势**
1.**HTML声明模板式写法**
2.**js可编程能力**

#### 简单条件渲染
````
const logIn = true;

{/* 逻辑与 */}
{logIn && <span>已登录&</span>}

{/* 三元 */}
{logIn ? <span>已登录</span> : <span>未登录</span>}
````

#### 传递事件对象参数
````
 const clickHandler = (e) => {
    console.log('e', e);
  }
  return (
    <div className="App">
      <button onClick={clickHandler}>点我</button>
    </div>
  );
````

#### 传递自定义形参
````
  const clickHandler = (uname) => {
    console.log(uname);
  }
  return (
    <div className="App">
      <button onClick={() => clickHandler('liz')}>点我</button>
    </div>
  );
````

#### 同时传递事件对象参数和形参
````
  const clickHandler = (uname, e) => {
    console.log(uname, e);
  }
  return (
    <div className="App">
      <button onClick={(e) => clickHandler('liz', e)}>点我</button>
    </div>
  );
````

#### [BABEL](https://www.babeljs.cn/docs/)
Babel 是一个工具链，主要用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

# react组件样式控制
1.  行内样式
````
      <button style={{ color: 'red' }} >{count}</button>

````
或者
```` 
      const style = {
          color: 'red'
        }
      <button style={style}>{count}</button>

````

2.class类名控制
对应到**className**
````
     <button className="foo">{count}</button>
````


