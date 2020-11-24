import React from 'react'

class Row extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.history.push(`/genre/${this.props.genre.id}`)
    }

    render() {
        return (
            <div className="row">
                <h1 className="row-title" onClick={this.handleClick}>{this.props.genre.title}</h1>

                <div className="row-tiles">
                    {/* {this.props.ids.map((id, i) => {
                        this.props.movies.map(movie => {
                            if (movie.id === id) {
                                // debugger;
                                return (
                                    <video className="row-tile">
                                        <source src={this.props.movies[i].movieUrl} type="video/mp4"/>
                                    </video>
                                )
                            } 
                        })
                    })} */}
                                <video className="row-tile" onClick={() => {this.props.history.push(`/watch/${39}`)}}>
                                    <source src={this.props.movies[3].movieUrl} type="video/mp4"/>
                                </video>
                </div>
            </div>
        )
    }
}

export default Row;

