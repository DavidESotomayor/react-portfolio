import React from 'react'

const Contact = () => {
    return (
    <div className="container ds-container">
        <div className="row">
            <div className="col-lg-8">
                <h2>Contact</h2>
            </div>
        </div>
        <div className="col-lg-8 p-0">
            <hr />
        </div>
        <div className="row">
            <form action="https://formspree.io/f/xbjpkynk" className="col-lg-8" method="POST">
                <div className="form-group">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" name="name" className="form-control" id="inputName" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail">Email</label>
                    <input type="email" name="_replyto" className="form-control" id="inputEmail" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="messageTextArea">Message</label>
                    <textarea className="form-control" name="message" id="messageTextArea" rows="3"
                        placeholder="Message"></textarea>
                </div>
                <button type="submit" value="Send" className="btn btn-primary mb-3 buttonStyle">Submit</button>
            </form>
        </div>
    </div>
    )
}

export default Contact