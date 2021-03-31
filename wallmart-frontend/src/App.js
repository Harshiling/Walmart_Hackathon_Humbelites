import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Form from "./components/Form";
import HomePage from "./components/HomePage";

const App = () => {
    return(
        <Router>
            <Switch>
                <Route path="/add">
                    <div>
                        <Header />
                        <Form />
                    </div>
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;