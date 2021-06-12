import React, { useState } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
function HeaderLogin() {
  const [signOut, setSignOut] = useState(false);
  // ====================== hàm signOut ========================
  function getSignOut() {
    if (signOut === true) {
      return <Redirect to="/" />;
    }
  }
  // ====================== phần render ===========================
  return (
    <>
      {getSignOut()}
      <div className="navLogin">
        <div className="navLogin__logo">
          <img src="./icon/logospare.png" alt="logo" />
        </div>
        <div className="navLogin__link">
          <ul>
            <li className="groupLogin">
              <a href="#">
                <i className="fas fa-user-circle" />
              </a>
              <ul className="subMenuLogin">
                <li>
                  <a href="#">
                    <i className="far fa-address-card mr-2" />
                    <span>Tài Khoản</span>
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setSignOut(!signOut)}>
                    <i className="fas fa-sign-out-alt mr-2" />
                    <span>Đăng Xuất</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-search" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HeaderLogin;
