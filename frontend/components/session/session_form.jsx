import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user)
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value }) //
        }
    }

    renderErrors() {
        return(
          <ul>

            {this.props.errors.map((error, i) => (
              <li key={`error${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
      }



    render() {
        return (
            <div>
                <h1>Sign In</h1>

                {this.renderErrors()}

                <form onSubmit={this.handleSubmit}>
                    <label>Email:
                            <input type="text"
                            onChange={this.handleInput('email')}
                            value={this.state.email}
                        />
                    </label>
                    <br/>
                    <label>Password:
                            <input type="password"
                            onChange={this.handleInput('password')}
                            value={this.state.password}
                        />
                    </label>
                    <br/>
                    <button>Sign In</button>

                    <p>New to Netflex?</p><Link to="/">Sign up now</Link>
                </form>

            </div>
        )
    }
}

export default SessionForm;