import React from 'react';
import { Header } from '../header/Header';
import './App.css';
import { ItemOrderView } from '../item-order-view/ItemOrderView';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { CategoriesView } from '../categories-view/CategoriesView';
import { ItemsView } from '../items-view/ItemsView';
import { ROUTES } from '../../configuration/routes.config';

function App() {
    return (
        <BrowserRouter>

            <div className='app'>

                <div className='app__header'>
                    <Header/>
                </div>

                <div className="app__main">

                    <Switch>
                        <Route path={`/${ROUTES.categories}`}>
                            <CategoriesView/>
                        </Route>
                        <Route path={`/${ROUTES.items}/:categoryId`}>
                            <ItemsView/>
                        </Route>
                        <Route path={`/${ROUTES.itemOrder}/:itemId`}>
                            <ItemOrderView/>
                        </Route>
                    </Switch>

                </div>

            </div>

        </BrowserRouter>
    );
}

export default App;
