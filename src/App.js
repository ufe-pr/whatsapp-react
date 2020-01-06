import React from 'react';
import './App.css';
import Header from './components/header';
import Chats from './components/chats';
import FloatButton from './components/float-button';

function App() {
  return (
    <div className="App">
      <Header />
      <Chats />
      <FloatButton />
    </div>
  );
}

export default App;
