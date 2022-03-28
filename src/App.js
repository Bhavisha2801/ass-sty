import React from 'react';
import './App.css';
import { Button } from './Components/Button';
import { AnotherButton } from "./Components/AnotherButton"

function App() {

  return (
    <div className="App">
      <Button>Primary Button</Button>
      <Button>Default Button</Button>
      <Button className='border1'>Dashed Button</Button>
      <br />
      <AnotherButton>Text Button</AnotherButton>
      <AnotherButton>Link Button</AnotherButton>
    </div>
  );
}

export default App;
