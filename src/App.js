
import React from 'react';
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import Sidebar from "./Components/Sidebar/Sidebar";
import './App.css';
function App()
{
  return (
    <div className='App'>
      <div className='section'>
        <Header/>
      </div>
      <div className='section'>
        <div className='side'>
          <Sidebar/>
        </div>
      <div className='pro'>
        <Product/>
      </div>
      
      </div>




    </div>  

  );
}


export default App;
