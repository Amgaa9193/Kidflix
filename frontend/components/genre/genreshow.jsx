import React from 'react'
import NavBar from '../nav/nav'


class GenreShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchGenre(this.props.id)
    }

    render() {
        if (this.props.genre) {
            return (
               <div className="genre-show-page">
                   <NavBar/>

                   <div className="genre-show-page-title">
                        {this.props.genre.title}
                   </div>
               </div>
            )
        } else {
            return null 
        }
    }
}

export default GenreShow;