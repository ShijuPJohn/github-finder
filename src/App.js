import './App.css';
import React, {Component} from "react";
import Layout from "./components/Layout";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";

class App extends Component {
    state = {
        users: [],
        loading: false,
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

    async componentDidMount() {
        console.log(this.state)

    }

    render() {
        const {users, loading} = this.state
        return (
            <Layout>
                <div className={"container"}>
                    <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}
                            showClear={users.length > 0}/>
                    <Users loading={loading} users={users}/>
                </div>
            </Layout>
        );
    }

}

export default App;
