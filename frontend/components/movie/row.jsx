import React from 'react'


class Row extends React.Component {
    constructor(props) {
        // debugger;
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.handleListButtonClick = this.handleListButtonClick.bind(this);
    }

    componentDidMount() {
        // debugger;
        this.props.fetchMyLists()
    };

    handleClick(){
        this.props.history.push(`/genre/${this.props.genre.id}`)
    }

    handleListButtonClick(id) {
            // debugger;
            if(this.props.movies[id].onMyList !== true) {
                this.props.createMyList(id);
            }
            // debugger
            // remove mylist from main page, switch back the icon
            if(this.props.mylist.length < 0) {
                this.props.mylist.map((mylistid) => {
                    this.props.removeMyList(mylistid)
                })
            }
    }

    render() {
        // debugger;
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
                    <button onClick={() => this.handleListButtonClick(this.props.movies[id].id)}> {icon}</button>
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

