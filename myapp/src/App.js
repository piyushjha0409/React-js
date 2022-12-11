import NameForm from '../src/components/NameForm'
import './App.css';
import Calculator from './components/calculator';

function App() {
  return (
    <div className="App">
       <Calculator />
    </div>
  );
}

setInterval(App, 100);

export default App;
