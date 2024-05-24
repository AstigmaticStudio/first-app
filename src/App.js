import './App.css';
//const tg = window.Telegram.WebApp;
const text = `hellooooo`

function App() {

  const onClose = () => {
    alert(text)
  }

  return (
    <div className="App">
      кпуавысч
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
