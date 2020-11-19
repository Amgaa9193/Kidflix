import React from 'react';
import {Link} from 'react-router-dom';


class EmailForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ""
        }

      
        this.handleDemo = this.handleDemo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger;
        
        if (this.state.email.length === 0) {
            
        }else {
            this.props.receiveEmail(this.state.email);
            this.props.history.push("/signup")
        }
    }


    handleInput(field) {
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    handleDemo() {
        const user = {
            email: 'demoUser@yahoo.com', 
            password: 'password'
        }
        this.props.login(user)
    }

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

    render() {
      
        return (
            <div>
                <header>
                    <h1>NETFLEX</h1>
                    <Link to="/signin">Sign In</Link>
                    <Link to="/browse"><button onClick={this.handleDemo}>Demo User</button></Link>
                        {/*  this should tak me to browser page*/}
                    <br />
                </header>

                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Email:
                            <input type="text" 
                            onChange={this.handleInput('email')}
                            value={this.state.email}
                            />
                        </label>
                    <button>GET STARTED</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default EmailForm;