import GetRecipes from './components/GetRecipes';
import NavBar from './components/NavBar';
import Home from './components/Home';
import './App.css';
import 'bootstrap/scss/bootstrap.scss'
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>

      {/* <NavBar />
      <Home />
      <GetRecipes /> */}
      <Switch>
        <Route exact path="/">
          <NavBar />
          <Home />

        </Route>
        <Route exact path="/GetRecipes">
          <NavBar />
          <GetRecipes />


        </Route>

      </Switch>

    </>
  );
}

export default App;
