import React from 'react'

class Row extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        // debugger;
        return (
            <div className="row">
                <strong>{this.props.title}</strong>

                <div className="row-tiles">
                    {this.props.movies.map(movie => {
                        
                        return (
                            <video key={movie.id} className="row-tile" onClick={() => {this.props.history.push(`/watch/${movie.id}`)}}>
                                <source src={movie.movieUrl} type="video/mp4"/>
                            </video>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Row;