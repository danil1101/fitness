export default function Footer() {
  return (
    <footer>
      <div className="top_footer">
        <div className="logo_footer">
          <img
            src="https://thumb.tildacdn.com/tild3130-6237-4932-b131-623364393537/-/resize/58x/-/format/webp/photo_2022-07-29_174.png"
            alt=""
          />
          <div className="nameLogo">
            <h3>LINNIK FITNESS</h3>
            <h4>Школа фитнес-тренеров</h4>
          </div>
        </div>
        <div className="infoInet">
          <p>Мы в социальных сетях</p>
          <div className="icons">
            <a href="#">
              <img
                src="https://thumb.tildacdn.com/tild3433-3230-4430-b236-613335666165/-/resize/30x/-/format/webp/noroot.png"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="https://thumb.tildacdn.com/tild3236-6661-4035-b366-373331646330/-/resize/40x/-/format/webp/noroot.png"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="https://thumb.tildacdn.com/tild3838-3531-4466-b439-663734636431/-/resize/49x/-/format/webp/noroot.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div className="mainFooter">
        <div className="aboutSchools contentFooter">
          <h4>О школе:</h4>
          <a href="#">Курс "Богатый фитнес-тренер"</a>
          <a href="#">Курс "Нутрициолог 3.0"</a>
          <a href="#">Курсы по фитнес направлениям</a>
          <a href="#">Закрытый онлайн-клуб</a>
          <a href="#">Бесплатное обучение</a>
          <a href="#">Блог и статьи</a>
        </div>
        <div className="contentFooter">
          <h4>Юридическая информация:</h4>
          <p>
            ОГРНИП: 319619600107882 ИНН: 610802445078 ИП Линник Лилия Андреевна
          </p>
          <a href="#">Обработка персональных данных</a>
          <a href="#">Публичная оферта</a>
        </div>
        <div className="contentFooter">
            <h4>Способы оплаты на сайте:</h4>
            <div className="payment">
                <img src="https://static.tildacdn.com/tild6566-3431-4563-b335-616234383062/mc.svg" alt="" />
                <img src="https://static.tildacdn.com/tild6465-6232-4137-a131-373063383130/maestro.svg" alt="" />
                <img src="https://static.tildacdn.com/tild3236-3362-4430-b565-326561396164/visa.svg" alt="" />
                <img src="https://static.tildacdn.com/tild3336-3433-4634-b234-666433373962/mir.svg" alt="" />
                <img src="https://static.tildacdn.com/tild3163-3364-4931-a238-623735323038/pay-pal.svg" alt="" />
                <img src="https://static.tildacdn.com/tild6663-3634-4661-b233-656233396634/qiwi.svg" alt="" />
            </div>
        </div>
        <div className="contentFooter">
            <h4>Контакты:</h4>
            <h3><span>+7 958 761 86 60</span> <br /> * только для звонков</h3>
            <p>Написать в WhatsApp</p>
            <a href="#">Написать в Telegram</a>
        </div>
      </div>
      <div className="endFooter">
      <h3>© 2019 LINNIK FITNESS, все права защищены</h3>
      </div>
    </footer>
  );
}
