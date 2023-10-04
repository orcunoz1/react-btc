import React from "react";

const Services = () => {
  return (
    <>
      <div className="services-main-container">
        <div className="services-container">
          <div className="services-img">
            <img
              src="https://seeklogo.com/images/B/btcturk-logo-14F88C90A4-seeklogo.com.png"
              alt=""
              width={"38px"}
            />
          </div>
          <div className="services-info">
            <div className="services">
              <span>Hizmetler</span>
              <p>İşlem Aracılığı</p>
              <p> - Pay Piyasası</p>
              <p> - Viop</p>
              <p>-Yurt Dışı Pay Piyasası</p>
              <p>Portföy Aracılığı</p>
              <p>Sınırlı Saklama</p>
            </div>
            <div className="information">
              <span>Yasal Bilgiler</span>
              <p>Yasal Uyarı</p>
              <p>Yasal Duyurular</p>
              <p>Gizlilik Politikası</p>
              <p>KVKK Dokümanları</p>
              <p>Sözleşmeler</p>
              <p>Risk Bildirimleri</p>
            </div>
            <div className="help">
              <span>Yardım</span>
              <p>Güvenlik</p>
              <p>Komisyonlar</p>
              <p>Para Yatırma / Çekme</p>
              <p>Nemalandırma Politikası</p>
              <p>T+0 Erken Nakit Kullandırım</p>
            </div>
          </div>
        </div>
        <div className="services-end-text">
          <p>
            Tüm Hakları Saklıdır. © 2023 - Eliptik Yatırım Menkul Değerler A.Ş.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
