import React from "react";
import { Dropdown } from "react-bootstrap";
import { MdArrowDropDownCircle } from "react-icons/md";
import { HiSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import SearchForm from "../search/searchform";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="nav">
        <div className="navbar-links">
          <Link to="/browse">
            <img src={window.logoUrl} alt="logo" className="nav-logo" />
          </Link>
          <Link to="/mylist">MyList</Link>
          <SearchForm movies={this.props.movies} history={this.props.history} />
        </div>

        <div className="navbar-dropdown">
          <Dropdown>
            <Dropdown.Toggle className="dropdown-btn">
              <img
                src={window.avatarUrl}
                alt="greenAv"
                className="nav-avatar"
              />
              <MdArrowDropDownCircle />
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item>Account</Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={this.props.logout}
              >
                Signout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default NavBar;
