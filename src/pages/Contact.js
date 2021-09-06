import React from "react";
import logo from "../dist/img/logo/logo.svg"
function Contact() {
  return (
    <div>
      <div className="section" style={{height:"100vh"}}>
        <div className="section__contact flex flex-jc-c flex-ai-c mt-6">
          <div class="box">
            <div class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img
                    src={logo}
                    alt="Image"
                  />
                </figure>
              </div>
              <div class="media-content mr-6">
                <div class="content mr-5">
                    <span ><strong className="title">Liên hệ</strong></span>
                  <p className="mt-5"><strong>Hotline 1:</strong> 037.947.1370</p>
               
                  <p><strong>Hotline 2:</strong> 033.799.9436</p>
              
                  <div>
                  <p><strong className="is-primary">Zalo: </strong> 037.947.1370</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Contact;
