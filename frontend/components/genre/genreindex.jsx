import React from 'react'
import RowContainer from '../movie/row_container'
// import Row from '../movie/row'

class GenreIndex extends React.Component {
    componentDidMount() {
        this.props.fetchGenres()
    };

    render() {
            const genres = this.props.genres.map(genre => {
                return (
                   <li  key={genre.id}>
                       <RowContainer genre={genre} 
                            ids={genre.movieIds} 
                            movies={this.props.movies} 
                            history={this.props.history}
                        />
                   </li>
                )
            })
            return (
                <ul>
                    {genres}
                </ul>
            )
    }
}

export default GenreIndex;