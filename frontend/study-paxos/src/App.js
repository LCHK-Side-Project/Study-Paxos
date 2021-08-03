
import './App.css';
import QuestionBoard from './PostBoard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let App = () => {
  return (
    <Router>

      <div className="App">
        <header className="App-header">

          <ul class="flex border-b">
            <li class="mr-1">
              <Link class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" to="/">Home</Link>
            </li>
            <li class="mr-1">
              <Link class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" to="/us">US</Link>
            </li>
            <li class="mr-1">
              <Link class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" to="/uk">UK</Link>
            </li>
            <li class="mr-1">
              <Link class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" to="/ca">Canada</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/us">
              <QuestionBoard country="US" />
            </Route>
            <Route path="/uk">
              <QuestionBoard country="UK" />

            </Route>
            <Route path="/ca">
              <QuestionBoard country="Canada" />

            </Route>
            <Route path="/">
              <QuestionBoard country="General" />

            </Route>
          </Switch>
        </header>
      </div></Router>
  );
}

export default App;
