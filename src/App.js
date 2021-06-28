import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { AuthContextProvider, PrivateRoute } from './Components/Login/auth'
import SearchDestination from './Components/SearchDestination/SearchDestination';
import ViewSearchResult from './Components/ViewSearchResult/ViewSearchResult';

function App() {
  
  return (
    <AuthContextProvider>
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path="/blog">
                <Header />
                <h1 className="text-center mt-5">Blog</h1>
              </Route>
              <Route path="/contact">
                <Header />
                <h1 className="text-center mt-5">About</h1>
              </Route>
              <PrivateRoute exact path="/search/:searchUrl">
                <Header />
                <SearchDestination />
              </PrivateRoute>
              <PrivateRoute path="/destination/:methodUrl">
                <Header />
                <ViewSearchResult />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </AuthContextProvider>
  );
}

export default App;