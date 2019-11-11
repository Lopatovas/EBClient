import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './containers/Home';
import Register from './containers/Register';
import Login from './containers/Login';
import BookDetails from './containers/BookDetails';
import Library from './containers/Library';
import UserDetails from './containers/UserDetails';
import Message from './containers/Message';

import NavLayout from './layout/NavLayout';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <NavLayout>
            <Route exact path="/EBClient/" component={Home} />
            <Route path="/EBClient/Register" component={Register} />
            <Route path="/EBClient/Login" component={Login} />
            <Route path="/EBClient/Book/:id" component={BookDetails} />
            <Route path="/EBClient/Library/:id" component={Library} />
            <Route path="/EBClient/User/:id" component={UserDetails} />
            <Route path="/EBClient/Message/:id" component={Message} />
          </NavLayout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
