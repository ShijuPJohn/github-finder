import React, {Fragment} from 'react';
import spinner from './spinner.gif'

const Spinner = () => (
    <Fragment>
        <img src={spinner} alt={"progress indicator"} style={{width: "200px", margin: "auto", display: "block"}}/>
    </Fragment>
);

export default Spinner;