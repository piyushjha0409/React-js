import Clock from '../src/components/Clock'
import './App.css';

function App() {
  return (
    <div className="App">
        <Clock date={new Date()} />
    </div>
  );
}

setInterval(App, 100);

export default App;
