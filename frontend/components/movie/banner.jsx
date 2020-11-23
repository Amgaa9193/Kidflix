import React from 'react';
import { ImPlay3 } from 'react-icons/im';
import { VscInfo } from 'react-icons/vsc';

class Banner extends React.Component {
    // const i = Math.floor(Math.random())
    render() {
        return (
            <header className="banner">
                <video muted controls poster={window.trueUrl} width="100%" className="banner">
                    <source src={this.props.movies[1].movieUrl} type="video/mp4"/>
                </video>
                <div className="banner-contents">
                    <h1 className="banner-title">{this.props.movies[1].title}</h1>

                    <div className="banner-description">
                        <h1>{this.props.movies[1].description}</h1>
                    </div>

                    <div className="banner-btn">
                        <button className="banner-play-btn" onClick={() => {this.props.history.push(`/watch/${9}`)}}> <ImPlay3/> Play</button>
                        <button className="banner-info-btn"> <VscInfo/>More Info</button>
                    </div>
                </div>
                <div className="bottom"></div>
            </header>
        )
    }
}

export default Banner;