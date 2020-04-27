import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import { Switch, Route } from 'react-router';

import routes from './routes'

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Switch>
          {
            routes.map((route) => {
              return <Route key={route.path}
                path={route.path} exact={route.isExact}
                component={route.component}
              />
            })
          }

        </Switch>
      </div>
    )
  }
}


export default App;
