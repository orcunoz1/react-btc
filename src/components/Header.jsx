import React from "react";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-icon">
          <span>BtcTurk | Hisse</span>
        </div>
        <div className="header-buttons">
          <div className="header-featurs">
            <span>Özellikler</span>
            <span>Bize Ulaşın</span>
          </div>

          <div className="download-button">
            <button className="dowload-app">Uygulamayı İndirin</button>
          </div>
          <div className="function-button">
            <button>
              <i className="fa-solid fa-globe"></i>
            </button>

            <span>|</span>
            <i className="fa-regular fa-moon"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
