import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import BookDetails from './components/BookDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/add-book'>
              <AddBook />
            </Route>
            <Route path='/books/:id'>
              <BookDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
