import React from 'react'
import NavBar from '../nav/nav';

class MyListIndex extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchMyLists()
        this.props.fetchMovies()
    };

    handleClick() {
        this.props.removeMyList()
    }

    
    render() {
        if(this.props.mylists && Object.values(this.props.movies).length >= 1){
            
            const movies = this.props.mylists.map(mylist => {
                
                return (
                    <div className="mylist-movie" key={mylist.id}>
                        <video onClick={() => {this.props.history.push(`/watch/${mylist.movie_id}`)}}>
                            <source src={this.props.movies[mylist.movie_id].movieUrl} type="video/mp4"/>
                        </video>
                        <button onClick={this.handleClick}><i className="fas fa-check-circle"></i></button>
                    </div>
                )
            })

            return (
                <div className="mylist-page">
                    <NavBar/>
                     {movies}
                </div>
            )
        } else {
            return null
        }
    }
}

export default MyListIndex;