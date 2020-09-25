import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import girl from './styles/images/girl.jpeg'


class App extends Component {
    render() {
        return (
            <div>
                <div className="hero">
                    <div className="leftSide">
                        <img src={girl} className="heroImage"></img>
                    </div>
                    <div className="rightSide">
                        <div>
                            <h3> Naomi Cox </h3>
                            <div className="heroDesc_container">
                                <p className="heroDesc"> I create <span className="desc_standout">approachable and responsive</span> digital products.
                        </p>
                            </div>
                            <p className="about">About</p>
                        </div>
                        {/* about me div */}
                        <div className="aboutMe">
                            <span>hello this is some filler text to fill the space hello this is some filler text to fill the space hello this is some
                            filler text to fill the space hello this is some filler text to fill the space
                            hello this is some filler text to fill the space
                            hello this is some filler text to fill the space
                            hello this is some filler text to fill the space
                            hello this is some filler text to fill the space
                            hello this is some filler text to fill the space
                        </span>
                        </div>
                    </div>
                </div>
                <div>
                    <p>hello text after hero</p>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))