import React from 'react'
import NavBar from '../nav/nav'
import Banner from './banner'
import Row from './row'


class MovieIndex extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchMovies()
    };

    handleClick(e) {
        e.preventDefault();
        this.props.logout()
    }


    
    render() {
        if (Object.keys(this.props.movies).length === 0 ) {
            return <div></div>
        } else {
            return (
                <div className="browse">
                    <NavBar logout={this.props.logout}/>
                    <Banner movies={this.props.movies} history={this.props.history}/>
                    <div>
                       <Row title="Action" movies={this.props.movies} history={this.props.history}/>
                       <Row title="Educational" movies={this.props.movies} history={this.props.history}/>
                       <Row title="Social Skills" movies={this.props.movies} history={this.props.history}/>
                       <Row title="Adventure" movies={this.props.movies} history={this.props.history}/>
                       <Row title="She Does It Her Way" movies={this.props.movies} history={this.props.history}/>
                    </div>

                </div>
            )
        }
    }
}

export default MovieIndex;