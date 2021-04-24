import React from 'react';
import { Header } from '../header.component/Header';
import './App.css';
import { CategoriesView } from '../categories-view.component/CategoriesView';

function App() {
  return (
    <div className='app'>

        <div className='app__header'>
            <Header/>
        </div>


        <div className="app__categories">
            <CategoriesView/>
        </div>

    </div>
  );
}

export default App;
