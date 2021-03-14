import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from "react";
import Home from "./components/home/Home";
import Navigation from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Routes from "./routing/Routes";

const App = () => {
    return (
        <Router>
            <Fragment>
                <Navigation />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route component={Routes} />
                </Switch>
                <Footer />
            </Fragment>
        </Router>
    );
};

export default App;
