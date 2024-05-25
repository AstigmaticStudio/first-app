import './App.css';
//const tg = window.Telegram.WebApp;
//const text = `hellooooo`
let score = 0

function App() {

  const onClose = () => {
    score += 1
  }

  return (
    <div className="App">
      уо3цаш0щвзльд
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
