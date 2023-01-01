import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  return (
    <div>
      <div className="bg-dark text-white">
        <h1 className="text-info">Contact Us</h1>
        <div className="contact-form px-5">
          <div className="p-2 bg-dark text-white">
            <div className="contact">
              <h2 className="text-info">Contact US</h2>
              012345678910 <br></br>
              armobileshop@gmail.com <br></br>
              123 road, Chattogram
            </div>
          </div>

          <div className="">
            <div className="bg-dark p-2 contact-inputs mx-5">
              <div className="d-flex justify-content-center gap-2">
                <div className="my-2">
                  <FontAwesomeIcon className="text-white" icon="check-square" />
                  <input type="text" size="40" placeholder="Name" />
                </div>
                <div className="my-2">
                  <input type="text" size="40" placeholder="Email" />
                </div>
              </div>
              <textarea
                name=""
                id=""
                cols="40"
                rows="3"
                placeholder="Message"
              ></textarea>
              <button className="send_button rounded-3 border-0">Send</button>
            </div>
          </div>
          <div className="social p-2 bg-dark text-white">
            <div className="social-back">
              <h2 className="text-info">Social Links</h2>
              <p style={{ textAlign: "justify" }}>
                For any question, feel free to leave a message for us. Or you
                can always contact us in our social accounts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
