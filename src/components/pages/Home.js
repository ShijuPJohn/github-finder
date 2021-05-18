import React, {Fragment} from 'react';
import Search from "../users/Search";
import Users from "../users/Users";

const Home = ({searchUsers, clearUsers, users, setAlert, loading, getUser}) => (
    <Fragment>
        <Search searchUsers={searchUsers} clearUsers={clearUsers}
                showClear={users.length > 0} setAlert={setAlert}/>
        <Users loading={loading} users={users} getUser={getUser}/>
    </Fragment>
);

export default Home;