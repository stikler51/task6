import './App.css';
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Header from "./components/Header/Header";

function App() {
    return <Router>
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/'><Home/></Route>
                <Route path='/employees'><Employees/></Route>
            </Switch>
        </div>
    </Router>
}

export default App;
