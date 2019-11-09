import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './containers/Home';
import Register from './containers/Register';
import Login from './containers/Login';
import BookDetails from './containers/BookDetails';
import Library from './containers/Library';
import LibraryDetails from './containers/LibraryDetails';
import UserDetails from './containers/UserDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Register" component={Register} />
          <Route path="/Login" component={Login} />
          <Route path="/Book/:id" component={BookDetails} />
          <Route path="/Library/:id" component={Library} />
          <Route path="/Library/:id/Details" component={LibraryDetails} />
          <Route path="/User/:id" component={UserDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
