import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {useContext} from "react";
import  {GithubContext} from "../../context/github/githubContext";


const Navbar = (props) => {
    const [githubProfiles, dispatchGithub] = useContext(GithubContext)
    console.log(githubProfiles)
    const btnOnClick = () => {
        dispatchGithub({type: 'ADD', payload: {title: 'Something', year: 1990}})
    }
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