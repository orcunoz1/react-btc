import React from "react";

const AppContainer = () => {
  return (
    <>
      <div className="app-container">
        <div className="app-title">
          <span>Yatırıma hemen başlayın.</span>
        </div>
        <div className="app-qr">
          <p>
            BtcTurk | Hisse mobil uygulamasını indirmek için QR kodu okutun.
          </p>
          <i className="fa-solid fa-arrow-down"></i>
          <img
            src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
            alt=""
            width={"172px"}
            height={"170px"}
          />
          <div className="app-qr-text">
            <span>Hesap Açın</span>
            <i className="fa-solid fa-chevron-right"></i>
            <span>Türk Lirası Yükleyin</span>
            <i className="fa-solid fa-chevron-right"></i>
            <span>Hisse Alın</span>
          </div>
        </div>
        <div className="app-img">
          <img
            src="https://www.eliptikyatirim.com/images/download-cover-full.png"
            alt=""
            width={"660px"}
            height={"268px"}
          />
        </div>
      </div>
    </>
  );
};

export default AppContainer;
