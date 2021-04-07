import React from 'react'

const Contact = () => {
    return (
    <div class="container ds-container">
        <div class="row">
            <div class="col-lg-8">
                <h2>Contact</h2>
            </div>
        </div>
        <div class="col-lg-8 p-0">
            <hr />
        </div>
        <div class="row">
            <form action="https://formspree.io/f/xbjpkynk" class="col-lg-8" method="POST">
                <div class="form-group">
                    <label for="inputName">Name</label>
                    <input type="text" name="name" class="form-control" id="inputName" placeholder="Name" />
                </div>
                <div class="form-group">
                    <label for="inputEmail">Email</label>
                    <input type="email" name="_replyto" class="form-control" id="inputEmail" placeholder="Email" />
                </div>
                <div class="form-group">
                    <label for="messageTextArea">Message</label>
                    <textarea class="form-control" name="message" id="messageTextArea" rows="3"
                        placeholder="Message"></textarea>
                </div>
                <button type="submit" value="Send" class="btn btn-primary mb-3 buttonStyle">Submit</button>
            </form>
        </div>
    </div>
    )
}

export default Contact