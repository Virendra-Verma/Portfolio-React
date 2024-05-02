import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "./style.scss";

const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4>
                I would be happy to answer any questions you may have about
                this site and my work. Feel free to contact me.
            </h4>
            <div className="contact-option">
                <FaPhoneAlt />
                <span className="text">+919935331043</span>
            </div>
            <div className="contact-option">
                <MdEmail />
                <span className="text">vkverma991099@gmail.com</span>
            </div>
        </div>
    );
};

export default ContactInfo;
