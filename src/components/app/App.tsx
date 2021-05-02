import React from 'react';
import { Header } from '../header/Header';
import './App.css';
import { ItemOrderView } from "../item-order-view/ItemOrderView";

function App() {
    return (
        <div className='app'>

            <div className='app__header'>
                <Header/>
            </div>


            <div className="app__categories">
                {/*<ItemsView/>*/}
                {/*<CategoriesView/>*/}
                <ItemOrderView/>
            </div>

        </div>
    );
}

export default App;
