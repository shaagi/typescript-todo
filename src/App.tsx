import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';

let printName: (name: string) => void;

const App: React.FC = () => {
  return (
    <div className="App">
     <span className='heading'>Taskify</span>
     <InputField />
    </div>
  );
}

export default App;
