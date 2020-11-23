import React from 'react';
import {Dropdown} from 'react-bootstrap';
import {MdArrowDropDownCircle} from 'react-icons/md';
import {HiSearch} from 'react-icons/hi';
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
    render() {
        return (
            <div className="nav">
                <div className="navbar-links">
                        <Link to="/browse"><img src={window.logoUrl} alt="logo" className="nav-logo"/></Link>
                        <a href="#" className="links">Movies</a>
                        <a href="#" className="links">Latest</a>
                        <a href="#" className="links">MyList</a>
                        <a href="#" className="links"><HiSearch/></a>
                </div>


                <div className="navbar-dropdown">
                    <Dropdown>
                        <Dropdown.Toggle className="dropdown-btn">
                            <img src={window.avatarUrl} alt="greenAv" className="nav-avatar"/><MdArrowDropDownCircle/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu">
                            <Dropdown.Item><a href="#">Account</a></Dropdown.Item>
                            <Dropdown.Item className="dropdown-item"> <a onClick={this.props.logout}>Signout</a></Dropdown.Item>
                        </Dropdown.Menu>

                    </Dropdown>
                </div>
            </div>
        )
    }
}

export default NavBar