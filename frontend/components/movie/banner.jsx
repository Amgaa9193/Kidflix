import React from 'react';
import { ImPlay3 } from 'react-icons/im';
import { VscInfo } from 'react-icons/vsc';

class Banner extends React.Component {
    render() {
        // const randomMonth = months[Math.floor(Math.random() * months.length)];
        let movie = this.props.movies[Math.floor(Math.random() * this.props.movies.length)];

        return (
            <header className="banner">
                <video muted width="100%" height="50%" className="banner">
                    <source src={movie.movieUrl} type="video/mp4"/>
                </video>
                <div className="banner-contents">
                    <h1 className="banner-title">{movie.title}</h1>

                    <div className="banner-description">

                        <h1>{movie.description}</h1>
                    </div>

                    <div className="banner-btn">
                        <button className="banner-play-btn" onClick={() => {this.props.history.push(`/watch/${movie.id}`)}}> <ImPlay3/> Play</button>
                        <button className="banner-info-btn"> <VscInfo/>More Info</button>
                    </div>
                </div>
                <div className="bottom"></div>
            </header>
        )
    }
}

export default Banner;