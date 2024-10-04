import React, { useState, createContext, useContext } from 'react';

// 使用createContext方法创建一个上下文对象
const NameContext = createContext();

// 子组件 A
function A() {
  const aName = 'A';
  console.log(`this is ${aName}`);

  // 获取并设置 Context 中的值
  const { setName } = useContext(NameContext);

  return (
    <div>
      <button onClick={() => setName(aName)}>发送</button>
    </div>
  );
}

// 子组件 B
function B() {
  const { name } = useContext(NameContext);
  return (
    <div>
      <p>Received name: {name}</p>
    </div>
  );
}

// 父组件 App
function App() {
  const [name, setName] = useState('');

  return (
    //在顶层组件（App）中通过 Ctx.Provider 组件提供数据
    <NameContext.Provider value={{ name, setName }}>
      <div>
        <A />
        <B />
      </div>
    </NameContext.Provider>
  );
}

export default App;