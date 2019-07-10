import React from 'react';
import './App.scss';
import Layout from '../components/Layout/Layout';
import Articles from './Articles/Articles';
import Details from './Details/Details';
import Error404 from '../components/Error404/index';
import { Route, Switch, Redirect, BrowserRouter as Router, } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Articles} />
            <Route path="/details" component={Details} />
            <Route path="/error404" component={Error404} />
            <Redirect from="*" to="/error404" />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
