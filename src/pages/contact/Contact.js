import React from "react";
import "./contact.scss";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <div className="Contact">
      <Fade>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5">
              <div className="row">
                <div className="col-12">
                  <textarea rows="8"></textarea>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
              </div>
              <button className="mt-4">Submit</button>
            </div>
            <div className="col-lg-4">
              <h3>Send us a message</h3>
              <p>
                Lorem ipsum dolor sit amet, comp uting of ore et dolore ma
                antemo enim. Quam quisq ue id diam.
              </p>
              <a href="mailto:Umea@qode.com">
                <i class="bi bi-envelope"></i> Umea@qode.com
              </a>
              <br />
              <a href="#">
                <i class="bi bi-house-door"></i> Mäster Samuelsgatan 48A, Sweden
              </a>
              <br />
              <a href="tel: 668 66 448 6452 99">
                <i class="bi bi-headset"></i> + 668 66 448 6452 99
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
