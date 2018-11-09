import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css'

import homeRoutes from './demo/routes/homeRoutes';

import Header from './demo/components/header';
import Content from './demo/components/content';
import Footer from './demo/components/footer';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header/>
            <Content>

                <div>
                  {
                    homeRoutes.map( route => <Route component={route.component} path={route.path} exact={route.exact} key={route.path}/>)
                  }
                </div>
            </Content>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
