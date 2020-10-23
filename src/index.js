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
                            <p> Hi, i'm Naomi. I make designs <span className='accentColor'>come to life</span> on the web. </p>
                            <p>I'm a passionate junior developer who enjoys the ins and outs of all things syntax. I originally 
                            specialized in technical writing with a minor in web development UX. I enjoyed proofreading and editing technical documents
                            but I quickly lost my spark of creativity. I re-found that spark with my love for programming. 
                            What started as a minor with a few introductory classes and projects expanded into a joy of continual learning. 
                            I look forward to the continual education that programming offers, since there are always new programming languages, better syntax and code writing, and
                            easier to understand documentation to challenge me and encourage me to grow.   
                            </p>
                            <p>
                            I love applying responsive design to my projects and applications. I find it rewarding and satisfying to have a responsive 
                            design that users can easily use, all while looking amazing. I find that through programming, I can still be artistic and creative
                            all while being completely engaged. 
                            </p>     
                            <p>Although my journey is just beginning, and sometimes it can feel more like wandering than a straight path, a very wise 
                            individual once said, 
                            </p>
                            <p><span className='accentColor' style={{ marginTop: '20px' }}>  "Not all those who wander are lost" </span> -Bilbo Baggins</p>
                        </div>
                    </div>
                </div>
                {/* projects */}
                <div className='projectContainer' style={{marginTop: '40px'}}>
                    <p className="projects">Projects</p>
                    {/* bar one */}
                    <div className='projectBar_1'>
                        <div className='medProject purpleBorder margin_left_20' style={{ marginRight: '10px' }}>
                            hieeee
                        </div>
                        <div className='largeProject purpleBorder margin_right_20'>
                            hieeeee 22222
                        </div>
                    </div>
                    {/* bar two */}
                    <div className='projectBar_2'>
                        <div className='halfProj purpleBorder margin_left_20' style={{ marginRight: '10px' }}>
                            hieeee
                        </div>
                        <div className='halfProj margin_right_20'>
                            {/* split divs */}
                            <div className='purpleBorder' style={{ height: '50%' }}>
                                50
                            </div>
                            <div className='purpleBorder' style={{ height: '184px', marginTop: '10px' }}>
                                bottom 50
                            </div>
                        </div>
                    </div>
                </div>
                {/* form */}
                <div className="container">
                <p className="contact">Contact</p>
                <form action="action_page.php" className='contactForm'>

                    <label>First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                    <label>Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                     <label>Email</label>
                    <input type="text" id="email" name="email" placeholder="email address"/>

                    <label>Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{ height:"200px"}}></textarea>

                    <input type="submit" value="Submit"/>
                </form>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))