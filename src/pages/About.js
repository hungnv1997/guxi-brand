import React from "react";
import logo from "../dist/img/logo/logo.svg";
function About() {
  return (
    <div className="section flex flex-dr-r flex-jc-sa flex-ai-c">
      <div className="tile is-ancestor ml-5 mb-5">
        <div className="tile is-6">
          <div className="container about__descript">
            <p className="is-size-5 mb-3">
              Giới thiệu về thương hiệu Guxi sp Hongkong
            </p>
            <p className="sub-title mb-2">WELCOME TO GUXI • SP</p>
            <p className="is-size-7 mb-2">
              Guxi sp Việt Nam là nhà phân phối chính thức của Guxi Hong Kong
              tại Việt Nam. Sản phẩm mà chúng tôi phân phối là phụ kiện công
              nghệ và tiêu dùng thông minh chính hãng Guxi•sp, Guxi•home,
              Guxi•gaming.
            </p>
            <p className="is-size-7 mb-2">
              Guxi sp cam kết đem đến cho quý khách những sản phẩm chất lượng và
              luôn đặt KHÁCH HÀNG LÀ TRUNG TÂM trong những hoạt động của mình.
            </p>
          </div>
        </div>
        <div className="tile ml-6">
          <figure
            // style={{ width: "50%" }}
            className=" is-flex is-justify-content-flex-start about__img ml-7 "
          >
            <img
              style={{
                height: "155px",

                width: "155px",
              }}
              src={logo}
              alt="Guxi•sp brand"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default About;
