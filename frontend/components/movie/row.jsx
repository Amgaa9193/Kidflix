import React from 'react'
import { removeMyList, createMyList} from '../../actions/mylist_actions';

class Row extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
        // this.handleListButtonClick = this.handleListButtonClick.bind(this);
    }

    handleClick(){
        this.props.history.push(`/genre/${this.props.genre.id}`)
    }

    // handleListButtonClick(id) {
    //     // this.props.ids.map((id) => {
    //         if(this.props.movies[id].onMyList === true) {
    //             this.props.removeMyList(id); //to remove a mylist it needs a mylist.id?
    //         } else {
    //             this.props.createMyList(id);
    //         }
    //     // })
    // }

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
                    {/* <button onClick={() => this.handleListButtonClick(this.props.movies[id])}> {icon}</button> */}
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

