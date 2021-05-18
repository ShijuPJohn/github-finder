import './App.css';
import React, {Component} from "react";
import Layout from "./components/Layout";
import axios from "axios";
import Alert from "./components/layout/Alert";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

class App extends Component {
    state = {
        users: [],
        loading: false,
        alert: null,
    }

    searchUsers = async (str) => {
        this.setState({loading: true})
        const res = await axios.get(`https://api.github.com/search/users?q=${str}&client_id=`
            + `${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({users: res.data.items, loading: false})
    }

    clearUsers = () => {
        this.setState({users: [], loading: false})
    }
    setAlert = (msg, type) => {
        this.setState({alert: {msg, type}})
        setTimeout(() => {
            this.setState({alert: null})
        }, 2000)
    }


    render() {

        return (
            <BrowserRouter>
                <Layout>
                    <div className={"container"}>
                        <Alert alert={this.state.alert}/>
                        <Switch>
                            <Route exact path={'/'} render={() => <Home searchUsers={this.searchUsers}
                                                                        setAlert={this.setAlert}
                                                                        clearUsers={this.clearUsers}
                                                                        users={this.state.users}
                                                                        loading={this.state.loading}/>}/>
                            <Route exact path={'/about'} component={About}/>
                        </Switch>
                    </div>
                </Layout>
            </BrowserRouter>

        );
    }

}

export default App;
