import React from 'react'
import NavBar from '../nav/nav'
// import Banner from '../movie/banner';

class GenreShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchGenre(this.props.id),
        this.props.fetchMovies()
    }

    render() {
            const movies = this.props.genre.movieIds.map((id) => {
                return (
                    <video height="50%" width="50%" controls key={id} onClick={() => {this.props.history.push(`/watch/${id}`)}}>
                        <source src={this.props.movies[id].movieUrl} type="video/mp4"/>
                    </video>
                )
            })

        if (this.props.genre) {
            return (
               <div className="genre-show-page">
                   <NavBar/>
                   {/* <Banner/> */}
                   <div className="genre-show-page-title">
                        {this.props.genre.title}
                        {movies}
                   </div>
               </div>
            )
        } else {
            return null 
        }
    }
}

export default GenreShow;