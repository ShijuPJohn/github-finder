import './App.css';
import React, {useState} from "react";
import Layout from "./components/Layout";
import axios from "axios";
import Alert from "./components/layout/Alert";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import User from "./components/users/User";

const App = (props) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(null)


    const searchUsers = async (str) => {
        setLoading(true)
        const res = await axios.get(`https://api.github.com/search/users?q=${str}&client_id=`
            + `${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        setUsers(res.data.items)
        setLoading(false)
    }

    //Get single user
    const getUser = async (username) => {
        setLoading(true)
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=`
            + `${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        setUser(res.data)
        setLoading(false)
    }

    const clearUsers = () => {
        setUsers([]);
        setLoading(false);
    }
    const setAlert1 = (msg, type) => {
        setAlert({msg, type})
        setTimeout(() => {
            setAlert(null)
        }, 2000)
    }

    return (
        <BrowserRouter>
            <Layout>
                <div className={"container"}>
                    <Alert alert={alert}/>
                    <Switch>
                        <Route exact path={'/'} render={() => <Home searchUsers={searchUsers}
                                                                    setAlert={setAlert1}
                                                                    clearUsers={clearUsers}
                                                                    users={users}
                                                                    getUser={getUser}
                                                                    loading={loading}/>}/>
                        <Route exact path={'/about'} component={About}/>
                        <Route exact path={'/user/:login'} render={(props) => (
                            <User {...props} getUser={getUser} user={user} loading={loading}/>
                        )}/>
                    </Switch>
                </div>
            </Layout>
        </BrowserRouter>

    );
}

export default App;
