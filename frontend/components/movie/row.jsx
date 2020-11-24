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
        const videoTiles = this.props.ids.map((id, i) => {
            return (
                <video key={id} className="row-tile" onClick={() => {this.props.history.push(`/watch/${id}`)}}>
                    <source src={this.props.movies[id].movieUrl} type="video/mp4"/>
                </video>
            )
        })

        // debugger;
        return (
            <div className="row">
                <h1 className="row-title" onClick={this.handleClick}>{this.props.genre.title}</h1>

                <div className="row-tiles">
                    {videoTiles}
                </div>
            </div>
        )
    }
}

export default Row;

