import React from "react";

const MainContainer = () => {
  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="main-info">
            <span>Yatırımlarınızı Dijital Dünyada Yönetmenin Yeni Yolu!</span>
            <div className="main-info-texts">
              <p>
                Hesap açılışından, yatırım işlemlerine bütünüyle dijital bir
                deneyim, avantajlı komisyon oranlarıyla BtcTurk | Hisse mobil
                uygulamasında.
              </p>
              <p>
                Hızlı, avantajlı ve kolay! BtcTurk | Hisse mobil uygulaması ile
                yeni nesil dijital yatırım deneyiminin keyfini çıkarın.
              </p>
            </div>
            <div className="main-button">
              <button>Uygulamayı İndirin {">"} </button>
            </div>
          </div>
          <div className="main-img">
            <img
              src="https://www.blockchain.com/static/img/home/products/ex-landing-margin-image.png"
              alt=""
              width={"500px"}
              height={"500px"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
