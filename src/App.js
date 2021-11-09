import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Edit from "./pages/Edit";
import FaceSwap from "./pages/FaceSwap";
import NotFound from "./pages/NotFound"
import Home from "./pages/index";

const App = () => {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/edit" exact component={Edit}/>
                    <Route path="/swapface" exact component={FaceSwap} />
                    <Route path="*" exact component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
