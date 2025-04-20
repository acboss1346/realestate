import "./ContactFormStyles.css";
import React from "react";

function ContactForm() {
    return (
        <div className="form-container">
            <h1>Send Us a Message!</h1>
            <form>
                <div className="form-group">
                    <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                    <textarea placeholder="Your Message" rows="4" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default ContactForm;
