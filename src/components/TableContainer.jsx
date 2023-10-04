import React from "react";

const TableContainer = () => {
  return (
    <>
      <div className="table-container">
        <div className="table-four">
          <div className="table-left">
            <div className="left-up">
              <div className="left-up-text">
                <span>Yurt İçi ve Yurt Dışı* Piyasalarda Yatırım</span>
                <p>
                  Yurt içinde BIST Pay Piyasası’nda, yurt dışında ise NASDAQ ve
                  NYSE borsalarında işlem gören hisse senetlerine yatırım
                  yapabilir ve ilgili şirketlere kolaylıkla ortak olabilirsiniz.
                </p>
              </div>
              <div className="left-up-img">
                <img
                  src="https://pbs.twimg.com/media/F4oS2DMXgAAKLz4?format=jpg&name=medium"
                  alt=""
                  width={"300px"}
                  height={"300px"}
                />
              </div>
            </div>
            <div className="left-down">
              <div className="left-down-text">
                <span>Oransal İşlem ile Yurtdışı* Hisselere Erişim</span>
                <p>
                  Oransal işlem özelliği ile yurt dışında işlem gören hisse
                  senedinin tamamı yerine bir kısmını satın alarak ilgili
                  şirkete ortak olabilirsiniz.
                </p>
              </div>
              <div className="left-down-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh_Ga_AR70UVdI7RwdNjxQ7SlDjcsSZthpsHZP3gy2V1K2l515ALd6dHXdGm7n4sMfaEw&usqp=CAU"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="table-right">
            <div className="right-up">
              <div className="right-up-text">
                <span>Ücretsiz Anlık Piyasa Verisi</span>
                <p>
                  BtcTurk | Hisse mobil uygulamasında işlem yaparken ihtiyaç
                  duyacağınız piyasa verilerine anlık ve ücretsiz olarak
                  erişebilirsiniz.
                </p>
              </div>
              <div className="right-up-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRUlgER68QkZLWTZrcwEznDr3rBZ6VBYOhxvKqPrQWEwe5vR1rWKlvzEgABVU_AM0Sno&usqp=CAU"
                  alt=""
                />
              </div>
            </div>
            <div className="right-down">
              <div className="right-down-text">
                <span>Avantajlı Komisyon Oranları</span>
                <p>
                  BtcTurk | Hisse mobil uygulamasında, işlem hacmine göre
                  belirlenen kademeli komisyon yapısı uygulanmaktadır. Bu sayede
                  alım/satım işlemlerinizi avantajlı komisyon oranları ile
                  gerçekleştirebilirsiniz.
                </p>
              </div>
              <div className="right-down-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv93XuF1NYpp124IdJgNu_h5qU3zeaS8D-2qVZq-ui6wSF6cEoJrPUXS0cpFpJj_jygvk&usqp=CAU"
                  alt=""
                  width={"400px"}
                  height={"200px"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="table-end">
          <div className="table-end-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqEp_VzmfXwC6Td-3omTuafo_uctR4JigBJg&usqp=CAU"
              alt=""
              width={"300px"}
              height={"300px"}
            />
          </div>
          <div className="table-end-text">
            <span>“Hemen Kullan” Özelliği (T+0)</span>
            <p>
              Talepte bulunmanız durumunda hisse satış bedelinizi “Hemen Kullan”
              özelliği ile aynı gün içinde yatırım hesabınıza aktarabilirsiniz.
            </p>
          </div>
        </div>
        <div className="table-text">
          <span>
            *BtcTurk | Hisse, yatırımcılara yurt dışı hisse senedi piyasası
            ürünlerine ulaşmaları için yakın zamanda işlem aracılığı hizmeti
            sağlayacaktır.
          </span>
        </div>
      </div>
    </>
  );
};

export default TableContainer;
