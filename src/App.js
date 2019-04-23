import React from 'react';
import EffectTest from './components/effectHook';
import './App.css';
import UsingStateExample from './components/stateHook';

const App = () => {
  return (
    <div className="App">
     <UsingStateExample />
     <EffectTest />
    </div>
  );
}

export default App;
