import React from 'react'


class Browse extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.logout()
    }


    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <button onClick={this.handleClick}>Signout</button>
            </div>
        )
    }
}

export default Browse;