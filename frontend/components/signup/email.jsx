import React from 'react';




class EmailForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
        }

      
        this.handleDemo = this.handleDemo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

  

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveEmail(this.state.email);
        this.props.history.push("/signup")
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
            <div className="emailform-background">
                    <img src={window.wallpaperUrl} alt="wallpaper" className="emailform-background" />
                <div className="Emailpage">
                    <nav className="Emailform-main-nav">   
                        <div className="Emailform-left-subnav">
                            <img src={window.logoUrl} alt="logo" className="Emailpagetop-logo"/>
                        </div>
                        <div className="Emailform-right-subnav">
                            <button onClick={() => this.props.history.push("/signin")} className="Emailform-nav-btn">Sign In</button>
                            <button onClick={this.handleDemo} className="Emailform-nav-btn">Demo User</button>
                        </div>
                    </nav>
                    <br/>
                    <div className="Emailpageform-content">
                        <h1>Unlimited movies, TV shows, and more.</h1>
                        <p>Watch anywhere. Cancel anytime.</p>
                        <p>Ready to watch? Enter your email to create or restart your membership</p>
                        <form onSubmit={this.handleSubmit}>
                            <label>Email:
                                <input type="text" 
                                onChange={this.handleInput('email')}
                                value={this.state.email}
                                placeholder="Email address"
                                required />
                            </label>
                            <button className="large-btn">GET STARTED <i className="fas fa-angle-right"></i></button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default EmailForm;