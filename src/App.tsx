import React, { createContext, Suspense, useEffect, useState } from 'react';
import Menu from './components/Menu/Menu';
import "./Style/AppStyle/style.css"

function App() {

  return (
    <Suspense fallback={"Loading..."}>
      <div className="App">
        <Menu />
      </div>
    </Suspense>
  );
}

export default App;
