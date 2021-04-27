import React from 'react';
import { Header } from '../header/Header';
import './App.css';
import { ItemsView } from '../items-view/ItemsView';

function App() {
  return (
    <div className='app'>

        <div className='app__header'>
            <Header/>
        </div>


        <div className="app__categories">
            <ItemsView/>
            {/*<CategoriesView/>*/}
        </div>

    </div>
  );
}

export default App;
