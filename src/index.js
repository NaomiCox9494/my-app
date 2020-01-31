import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import girl from './styles/images/girl.jpeg'


class App extends Component {
    render() {
        return (
            <div className="hero">
                <div className="leftSide">
                    <img src={girl} className="heroImage"></img>
                </div>
                <div className="rightSide">
                    <p className="about">About</p>
                    <h3> Naomi Cox </h3>
                    <div className="heroDesc_container">
                        <p className="heroDesc"> I create <span className="desc_standout">approachable and responsive</span> digital products.
                     </p>
                    </div>
                    
                    <div className ="about_scroll">
                        <p className="about_desc">Web Developer, Technical Writer.  It is an interesting combo but I believe that programming and English have a lot in common. 
                        A website needs a purpose. As a programmer, it is the language, the design, the content, and many other aspects that come 
                        together to create a message or to drive the purpose. Web languages and the frameworks that accompany it work as the tools, 
                        but it is navigation, the words, and the visual aspects of the site that all communicate with the end user.
                        Like English needs to be grammatically correct, code needs to be syntactically correct. There are always better ways to edit and revise and improve.
                         I hope you made the same connection to why I chose to study the subjects I did. As a lifelong learner, I strive to stay updated on the latest technology, edit to perfection, and communicate the end goal in every task I do.</p>
                    </div>
                </div> 
            </div>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))