import React from 'react';
import { Link } from 'react-router-dom';

class PasswordForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: this.props.email,
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    
    componentWillUnmount() {
        this.props.receiveEmail("");
        this.props.removeErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user).then( () => this.props.history.push('/browse'))

    };

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value }) 
        }
    };

    renderErrors() {
        // debugger;
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

    render () {
            return (
                <div>
                    <header>
                        <h3>One last step...</h3>
                        <h4>Joining Netflex Is Easy!</h4>
                        <Link to="/signin">Sign In</Link>
                    </header>
                    
                    {this.renderErrors()}

                    <form onSubmit={this.handleSubmit}>
                        <label> Email:
                           <input type="text" 
                           value={this.state.email}
                           onChange={this.handleInput('email')}/>
                        </label>
                    <br />
                        <label>Password:
                            <input type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            placeholder="Enter your password"
                            />
                        </label>
                        <button>Create Account</button>
                    </form>
                </div>
            )
    }
}

export default PasswordForm;