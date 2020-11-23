import React from 'react'
import { Link } from 'react-router-dom';
import {MdArrowBack} from 'react-icons/md'

class MovieShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchMovie(this.props.id)
    }

    render() {
            return (
                <div className="video-page">
                    <video controls autoPlay key={this.props.movie.id} width="100%" className="video-page">
                        <source src={this.props.movie.movieUrl} type="video/mp4"/>
                    </video>
                    <div className="video-page-content">
                      <Link to="/browse"><MdArrowBack/></Link>
                    </div>
                </div>
            )
    }
}

export default MovieShow;