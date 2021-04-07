import React from 'react'

const About = () => {
    return (
    <div className="container ds-container mb-5">
        <div className="col-lg-8">
            <h2>About Me</h2>
        </div>
        <div className="col-lg-8 p-0">
            <hr />
        </div>
        <div className="row">
            <div className="col-lg-8">
                <img src="./assets/images/IMG_7519.jpg" className="img-fluid rounded float-left img-personal-photo" alt="personal photo" />
                <p>My name is David Sotomayor and I am a software developer looking to further hone my skills.  This website showcases some projects I am currently working on, as well as a way to get in touch with me for questions, comments, or concerns.</p>
                <p>One thing I enjoy about programming is simply the flexibility and the power it has, and the impact it has on the world.  I'm glad to be a part of it.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-8">
                <hr />
                <h4>Fun Facts:</h4>
                <ul className="ul-styling">
                    <li>I am a BIG gamer</li>
                    <li>I am prepping to run my first D&D campaign</li>
                    <li>I enjoy sunny days as much as rainy days</li>
                    <li>My celebirty look alike is Andy Samberg (so my friends say)</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default About