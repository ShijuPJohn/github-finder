import React, {Fragment} from 'react';
import Navbar from "./layout/Navbar";


const Layout = (props) => (
    <Fragment>
        <Navbar title={'Github Finder'}/>
        {props.children}
    </Fragment>
);

export default Layout;