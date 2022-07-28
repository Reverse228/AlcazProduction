import React, { Suspense } from 'react';
import Menu from './components/Menu/Menu';
import HomePage from './pages/home_page/HomePage';
import "./Style/AppStyle/style.css"

function App() {

  return (
    <Suspense fallback={"Loading..."}>
      <div className="App">
        <Menu />
        <div style={{width: "100%", height: "72px"}}></div>
        <HomePage/>
      </div>
    </Suspense>
  );
}

export default App;
