import React from 'react';
import Effect from './components/effectHook';
import './App.css';
import UsingStateExample from './components/stateHook';

function App() {
  return (
    <div className="App">
     <UsingStateExample />
     <Effect />
    </div>
  );
}

export default App;
