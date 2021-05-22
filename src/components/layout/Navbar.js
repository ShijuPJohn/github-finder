import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const Navbar = (props) => {
    return (
        <nav className={"navbar bg-primary"}>
            <h1>
                <FontAwesomeIcon icon={faGithub}/>
                <span/> {props.title}
            </h1>

            <ul>
                <li>
                    <Link to={'/'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={'/about'}>
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

Navbar.defaultProps = {
    title: 'Hello'
};
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}