import React from 'react';
import logo from './logo.svg';
import './App.scss';
import PillButton from './components/pill-button/PillButton';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <PillButton>Pill Button</PillButton>
      </header>
    </div>
  );
}

export default App;
