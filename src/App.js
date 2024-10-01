
function App() {
  const clickHandler = (uname, e) => {
    console.log(uname, e);
  }
  return (
    <div className="App">
      <button onClick={(e) => clickHandler('liz', e)}>点我</button>
    </div>
  );
}

export default App;
