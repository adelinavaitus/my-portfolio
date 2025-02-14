import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/contact-me.css";
import { FaLinkedin } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

function Contact() {
    return (
        <div className="contact-container">
            {/* Contact introductory text */}
            <div className="contact-text">
                <p >If you would like to discuss collaboration opportunities,
                    feel free to reach out to me via LinkedIn or email.</p>
                <p>I look forward to hearing from you!😄</p>
            </div>

            {/* Buttons section for LinkedIn and email */}
            <div className="buttons-container-contact">
                <Link to="https://www.linkedin.com/in/adelina-vaitus-994617209">
                    <Button className="linkedin-button shadow">Linked
                        <FaLinkedin className="linkedin-logo" />
                    </Button>
                </Link>
                <Link to="mailto:adelinavaitus@gmail.com">
                    <Button className="email-button shadow">Send me an email
                        <MdOutgoingMail className="email-logo" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Contact;