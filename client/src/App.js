import './App.css';
import Navbar from './components/Navbar'
import ViewUsers from './components/ViewUsers'
import CreateUser from './components/CreateUser'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
          <Route exact path="/">
          <Navbar/>
          </Route>
          <Route exact path="/getUsers">
            <ViewUsers/>
          </Route>
          <Route exact path="/createUser">
            <CreateUser/>
          </Route>
        </Switch>
    </Router>

    </div>
  );
}

export default App;
