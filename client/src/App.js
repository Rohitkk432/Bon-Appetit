import {React} from "react";
import './App.css';
import MainPage from "./components/main-page";
import Login from "./components/login";
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/home' component={MainPage}/>
        <Route path='/' exact component={Login}/>
      </div>
    </Router>
  );
}

export default App;
