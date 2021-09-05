import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../dist/img/logo/logo.svg";

function Header() {
  const [burger, setBurger] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleBurgerClick = (event) => {
    event.preventDefault();
    setBurger(!burger);
    console.log(burger);
  };
  const handleDropdownClick = (event) => {
    event.preventDefault();
    setShowDropdown(!showDropdown);
  };

  return (
    <Fragment>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link className="pt-3 ml-5 " to="/">
            <Logo name="logo" width={48} height={48} />
          </Link>
          <a
            href="/"
            className="navbar-burger"
            id="burger"
            onClick={(event) => {
              handleBurgerClick(event);
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        {/* Navbar menu */}
        <div
          id="navbar"
          className={burger ? "navbar-menu is-active" : "navbar-menu mr-6"}
        >
          <div className="navbar-end">
            <Link
              to="/about"
              className={
                burger ? "navbar-item has-text-centered" : "navbar-item"
              }
            >
              Giới thiệu
            </Link>

            <Link
              to="/contact"
              className={
                burger ? "navbar-item has-text-centered" : "navbar-item"
              }
            >
              Liên hệ
            </Link>

            <div
              className={
                showDropdown
                  ? "navbar-item has-dropdown is-hoverable"
                  : "navbar-item has-dropdown"
              }
            >
              <a
                className="navbar-link has-text-centered"
                onClick={(event) => handleDropdownClick(event)}
              >
                Sản phẩm
              </a>

              <div className="navbar-dropdown">
                <a
                  className={
                    burger ? "navbar-item has-text-centered" : "navbar-item"
                  }
                >
                  Tai nghe
                </a>
                <a
                  className={
                    burger ? "navbar-item has-text-centered" : "navbar-item"
                  }
                >
                  Bộ sạc
                </a>
                <a
                  className={
                    burger ? "navbar-item has-text-centered" : "navbar-item"
                  }
                >
                  Phụ kiện Game
                </a>

                <a
                  className={
                    burger ? "navbar-item has-text-centered" : "navbar-item"
                  }
                >
                  Khác
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Header;
