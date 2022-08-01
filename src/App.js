import React from 'react';
import Header from './components/Header';
import Loader from './components/Loader';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
// import "../public/assets/css/global.css";

function App() {
 
    return (
    
      <div>
          <Loader />
        
          <Header />
          <Router>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product-page" element={<ProductDetailsPage />} />
              </Routes>
          </Router>
              
      </div>
)
};

export default App;
















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
