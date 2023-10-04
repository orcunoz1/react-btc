import React from "react";

const GraphicContainer = () => {
  return (
    <>
      <div className="graphic-container">
        <table>
          <tr>
            <th>Hisse Senedi</th>
            <th>Son Fiyat</th>
            <th>Günlük Değişim</th>
            <th>Günlük Hacim</th>
          </tr>
          <tr>
            <td>
              {" "}
              <img
                src="https://hisse.btcturk.com/_next/image/?url=https%3A%2F%2Fcdn.eliptikyatirim.com%2Fimg%2Fassets%2Flarge%2FTHYAO.png&w=48&q=75"
                alt=""
                width={"24px"}
                height={"24px"}
              />
              TURK HAVA YOLLARI AS
            </td>
            <td>253.40 TL</td>
            <td>%4.49</td>
            <td>15,553,874,739 TL</td>
          </tr>
          <tr>
            <td>
              <img
                src="https://hisse.btcturk.com/_next/image/?url=https%3A%2F%2Fcdn.eliptikyatirim.com%2Fimg%2Fassets%2Flarge%2FZOREN.png&w=48&q=75"
                alt=""
                width={"24px"}
                height={"24px"}
              />
              ZORLU ENERJI ELEK URET OTOPRD GR
            </td>
            <td>55.75 TL</td>
            <td>%2.01</td>
            <td>6,939,687,630 TL</td>
          </tr>
          <tr>
            <td>
              {" "}
              <img
                src="https://hisse.btcturk.com/_next/image/?url=https%3A%2F%2Fcdn.eliptikyatirim.com%2Fimg%2Fassets%2Flarge%2FEREGL.png&w=48&q=75"
                width={"24px"}
                height={"24px"}
                alt=""
              />
              EREGLI DEMIR CELIK
            </td>
            <td>18.73 TL</td>
            <td>%1.46</td>
            <td>5,513,708,721 TL</td>
          </tr>
          <tr>
            <td>
              {" "}
              <img
                src="https://hisse.btcturk.com/_next/image/?url=https%3A%2F%2Fcdn.eliptikyatirim.com%2Fimg%2Fassets%2Flarge%2FKRDMD.png&w=48&q=75"
                width={"24px"}
                alt=""
              />
              FORD OTOMOTIV SANAYI
            </td>
            <td>157.30 TL</td>
            <td>%-1.07</td>
            <td>5,034,227,427 TL</td>
          </tr>
          <tr>
            <td>
              {" "}
              <img
                src="https://hisse.btcturk.com/_next/image/?url=https%3A%2F%2Fcdn.eliptikyatirim.com%2Fimg%2Fassets%2Flarge%2FKOZAL.png&w=48&q=75"
                width={"24px"}
                alt=""
              />
              KOZA ALTIN ISLETMERLERI A.S.
            </td>
            <td>44.78 TL</td>
            <td>%0.58</td>
            <td>4,859,207,070 TL</td>
          </tr>
          <tr>
            <td>
              <img
                src="https://hisse.btcturk.com/_next/image/?url=https%3A%2F%2Fcdn.eliptikyatirim.com%2Fimg%2Fassets%2Flarge%2FSISE.png&w=48&q=75"
                width={"24px"}
                alt=""
              />
              T. SISE VE CAM FABRIKALARI AS
            </td>
            <td>34.48 TL</td>
            <td>%3.05</td>
            <td>4,450,301,357 TL</td>
          </tr>
          <tr>
            <td>
              <img
                src="https://hisse.btcturk.com/_next/image/?url=https%3A%2F%2Fcdn.eliptikyatirim.com%2Fimg%2Fassets%2Flarge%2FKRDMD.png&w=48&q=75"
                width={"24px"}
                alt=""
              />
              KARDEMİR D GRUBU
            </td>
            <td>8.40 TL</td>
            <td>%3.96</td>
            <td>4,234,348,740 TL</td>
          </tr>
          <tr>
            <td>
              {" "}
              <img
                src="https://hisse.btcturk.com/_next/image/?url=https%3A%2F%2Fcdn.eliptikyatirim.com%2Fimg%2Fassets%2Flarge%2FASTOR.png&w=48&q=75"
                width={"24px"}
                alt=""
              />
              ASTOR
            </td>
            <td>25.94 TL</td>
            <td>%0.78</td>
            <td>3,960,322,161 TL</td>
          </tr>
          <tr>
            <td>
              {" "}
              <img
                src="https://hisse.btcturk.com/_next/image/?url=https%3A%2F%2Fcdn.eliptikyatirim.com%2Fimg%2Fassets%2Flarge%2FKCHOL.png&w=48&q=75"
                width={"24px"}
                alt=""
              />
              KOC HOLDING
            </td>
            <td>150.40 TL</td>
            <td>%2.52</td>
            <td>3,867,378,565 TL</td>
          </tr>
          <tr>
            <td>
              {" "}
              <img
                src="https://hisse.btcturk.com/_next/image/?url=https%3A%2F%2Fcdn.eliptikyatirim.com%2Fimg%2Fassets%2Flarge%2FPETKM.png&w=48&q=75"
                width={"24px"}
                alt=""
              />
              PETKIM AS
            </td>
            <td>20.62 TL</td>
            <td>%4.99</td>
            <td>3,754,812,188 TL</td>
          </tr>
        </table>
        <div className="graphic-text">
          <span>
            Veriler 15 dakika gecikmeli olarak MATRİKS Bilgi Dağıtım Hizmetleri
            A.Ş. tarafından sağlanmaktadır. Diğer hisse senetlerinin işlem
            hacimlerini ve anlık fiyat verilerini görüntülemek için BtcTurk |
            Hisse mobil uygulamasını indirmeniz gerekmektedir.
          </span>
          <button>Uygulamayı İndirin</button>
        </div>
      </div>
    </>
  );
};

export default GraphicContainer;
