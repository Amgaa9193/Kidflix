import React from 'react'

class MyListIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        debugger;
        this.props.fetchMyLists()
    };

    render() {
        // debugger;
        // const movies = this.props.mylists.map(mylist => {
        //     return (
        //         <video onClick={() => {this.props.history.push(`/watch/${id}`)}}>
        //             <source src={mylist.movie.movieUrl} type="video/mp4"/>
        //         </video>
        //     )
        // })

        return (
            <div className="mylist-page">
                <h1>My List</h1>
                {/* <video onClick={() => {this.props.history.push(`/watch/${id}`)}}>
                    <source src={this.props.mylists.movies.movieUrl} type="video/mp4"/>
                </video> */}
            </div>
        )
    }
}

export default MyListIndex;