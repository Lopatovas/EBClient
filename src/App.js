import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './containers/Home';
import Register from './containers/Register';
import Login from './containers/Login';
import BookDetails from './containers/BookDetails';
import Library from './containers/Library';
import AdminPanel from './containers/AdminPanel';
import UserPanel from './containers/UserPanel';
import LibrarianPanel from './containers/LibrarianPanel';
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
            <Route path="/EBClient/user/:id" component={UserPanel} />
            <Route path="/EBClient/Message/:id" component={Message} />
            <Route path="/EBClient/admin/:id" component={AdminPanel} />
            <Route path="/EBClient/librarian/:id" component={LibrarianPanel} />
          </NavLayout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
