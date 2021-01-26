import React from 'react'
import { removeMyList, createMyList} from '../../actions/mylist_actions';

class Row extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.history.push(`/genre/${this.props.genre.id}`)
    }

    render() {

        const videoTiles = this.props.ids.map((id) => {
            let icon;
            if(this.props.movies[id].onMyList === true) {
                icon = <i className="fas fa-check-circle"></i>;
            } else {
                icon = <i className="fas fa-plus-circle"></i>
            }
            return (
                <div  key={id}>
                    <video className="row-tile" onClick={() => {this.props.history.push(`/watch/${id}`)}}>
                        <source src={this.props.movies[id].movieUrl} type="video/mp4"/>
                    </video>
                    <button>{icon}</button>
                </div>
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

