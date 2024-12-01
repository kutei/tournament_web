import './App.css';
import LinkButton from './children/LinkButton';

function App() {
  const title: string = 'Hello World!?';

  return (
    <div className="App">
      <h1>{title}</h1>
      <LinkButton text="ボタン" link="/test" />
    </div>
  );
}

export default App;
