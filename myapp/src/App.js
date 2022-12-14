import React, {createContext} from 'react';
import NameForm from '../src/components/NameForm'
import './App.css';
import ComponentA from './components/context/ComponentA';

const LastName = createContext() 

function App() {
  return (
    <>
    <LastName.Provider value={"jha"}>
      <ComponentA />
    </LastName.Provider>
    </>
  );
}

setInterval(App, 100);

export default App;
export {LastName}
