import './App.css';
import React, {Component} from "react";
import Layout from "./components/Layout";
import Users from "./components/users/Users";

class App extends Component {
    render() {
        return (
            <Layout>
                <div className={"container"}>
                    <Users/>
                </div>
            </Layout>
        );
    }

}

export default App;
