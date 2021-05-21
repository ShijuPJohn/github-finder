import './App.css';
import React from "react";
import Layout from "./components/Layout";
import Alert from "./components/layout/Alert";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import User from "./components/users/User";
import GithubProvider from "./context/github/GithubState";
import AlertProvider from "./context/alert/AlertState";

const App = (props) => {

    return (
        <GithubProvider>
            <AlertProvider>
                <BrowserRouter>
                    <Layout>
                        <div className={"container"}>
                            <Alert alert={alert}/>
                            <Switch>
                                <Route exact path={'/'} render={() => <Home/>}/>
                                <Route exact path={'/about'} component={About}/>
                                <Route exact path={'/user/:login'} render={(props) => (
                                    <User {...props}/>
                                )}/>
                            </Switch>
                        </div>
                    </Layout>
                </BrowserRouter>
            </AlertProvider>
        </GithubProvider>

    );
}

export default App;
