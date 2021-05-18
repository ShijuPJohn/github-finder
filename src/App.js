import './App.css';
import React, {Component} from "react";
import Layout from "./components/Layout";
import axios from "axios";
import Alert from "./components/layout/Alert";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import User from "./components/users/User";

class App extends Component {
    state = {
        users: [],
        user: {},
        loading: false,
        alert: null,
    }


    searchUsers = async (str) => {
        this.setState({loading: true})
        const res = await axios.get(`https://api.github.com/search/users?q=${str}&client_id=`
            + `${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({users: res.data.items, loading: false})
    }

    //Get single user
    getUser = async (username) => {
        this.setState({loading: true})
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=`
            + `${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({user: res.data, loading: false})
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
        const {users, user, loading} = this.state
        return (
            <BrowserRouter>
                <Layout>
                    <div className={"container"}>
                        <Alert alert={this.state.alert}/>
                        <Switch>
                            <Route exact path={'/'} render={() => <Home searchUsers={this.searchUsers}
                                                                        setAlert={this.setAlert}
                                                                        clearUsers={this.clearUsers}
                                                                        users={users}
                                                                        getUser={this.getUser}
                                                                        loading={loading}/>}/>
                            <Route exact path={'/about'} component={About}/>
                            <Route exact path={'/user/:login'} render={(props) => (
                                <User {...props} getUser={this.getUser} user={user} loading={loading}/>
                            )}/>
                        </Switch>
                    </div>
                </Layout>
            </BrowserRouter>

        );
    }

}

export default App;
