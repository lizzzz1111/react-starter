# React Hooks

#### useState 
useState 是一个 React Hook（函数），它允许我们向组件添加一个状态变量,  从而控制影响组件的渲染结果

1. **useState是一个函数，返回值是一个数组**
2. 数组中的第一个参数是状态变量，第二个参数是set函数用来修改状态变量
3. useState的参数将作为count的初始值

在React中，**<font color = 'red'>状态被认为是只读的，我们应该始终替换它而不是修改它，直接修改状态不能引发视图更新</font>**