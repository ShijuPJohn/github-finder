import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";


const Navbar = (props) => {
    return (
        <nav className={"navbar bg-primary"}>
            <h1>
                <FontAwesomeIcon icon={faGithub}/>
                <span/> {props.title}
            </h1>
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