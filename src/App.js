import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Loading from './components/Loading';
import Success from './components/Success';
function App() {
  return (
     <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<ProgressBar/>} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
