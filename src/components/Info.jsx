import React from "react";

const Info = () => {
  return (
    <>
      <div className="info-container">
        <div className="info-text">
          <img
            src="https://logowik.com/content/uploads/images/btcturk3782.jpg"
            width={"350px"}
            alt=""
          />
          <div className="info-text-explanation">
            <span>Biz Kimiz ?</span>
            <p>
              BtcTurk çatısı altında kurulan Eliptik Yatırım Menkul Değerler
              A.Ş., sermaye piyasası ürünlerinde hızlı, düşük maliyetli ve
              tamamen dijital yeni nesil yatırım hizmeti sunma vizyonuyla
              hareket eden bir aracı kurumdur. Hesap açılışından yatırım
              işlemlerine bütünüyle dijital, yeni nesil, self servis finansal
              hizmetler deneyimini kesintisiz olarak sunmayı amaçlayan Eliptik
              Yatırım Menkul Kıymetler A.Ş., bu deneyimi BtcTurk | Hisse mobil
              uygulaması aracılığıyla gerçekleştirmektedir.
            </p>
          </div>
        </div>
        <div className="info-contact">
          <div className="info-contact-title">
            <span>Bize Ulaşın</span>
          </div>
          <div className="info-contact-explanation">
            <p>Tüm soru, şikayet ve talepleriniz için bize ulaşabilirsiniz.</p>
            <span>destek@eliptikyatirim.com</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
