import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import History from './components/History';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>RTS_LABS</p>
        <Provider store={store}>
          <Router>
            <Fragment>
              <Switch>
                <Route exact path='/search' component={Search} />
                <Route exact path='/history' component={History} />
              </Switch>
            </Fragment>
          </Router>
        </Provider>
      </header>
    </div>
  );
}

export default App;
