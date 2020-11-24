import React from 'react'
import NavBar from '../nav/nav'
import Banner from './banner'
import GenreIndexContainer from '../genre/genre_index_container';

class MovieIndex extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // debugger;
        this.props.fetchMovies()
    };


    handleClick(e) {
        e.preventDefault();
        this.props.logout()
    }


    
    render() {
        if (Object.keys(this.props.movies).length <= 1 ) {
            return null
        } else {
            return (
                <div className="browse">
                    <NavBar logout={this.props.logout}/>
                    <Banner movies={this.props.movies} history={this.props.history}/>
                    <div className="movies-by-genre-row">
                        <GenreIndexContainer movies={this.props.movies} history={this.props.history}/>
                    </div>
                </div>
            )
        }
    }
}

export default MovieIndex;