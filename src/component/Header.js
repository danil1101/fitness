import React from "react";

export default function Header() {
  return (
    <div className="headerSection">
      <div className="headerCenter">
        <div className="headerLeft">
          <div className="headerH">
            <h1>РАСПРОДАЖА</h1>
            <h1>ОНЛАЙН КУРСОВ</h1>
            <h1>ОТ LINNIK FITNESS</h1>
          </div>
          <div className="headerp">
            <p className="headp">
              Топовые курсы в сфере фитнеса и питания от школы фитнес-
            </p>
            <p className="headp">
              тренеров. Прокачай свои навыки в удобном онлайн формате
            </p>
          </div>
          <div className="headerButtons">
            <div className="headWhite">
              <img
                src="https://thumb.tildacdn.com/tild6634-6534-4035-a638-616162366434/-/resize/90x/-/format/webp/icons8-discount-48.png"
                alt=""
              />
              <p>
                <b>Скидка </b>
                на все курсы от 50% до конца месяца.
              </p>
            </div>
            <div className="headWhite">
              <img
                src="https://thumb.tildacdn.com/tild3266-3839-4166-b361-306464303433/-/resize/90x/-/format/webp/icons8-certificate-4.png"
                alt=""
              />
              <p>
                Выдача <b>сертификатов </b> после окончания курсов.
              </p>
            </div>
            <div className="headWhite">
              <img
                src="https://thumb.tildacdn.com/tild3637-3433-4866-b730-656236653431/-/resize/90x/-/format/webp/icons8-trust-48.png"
                alt=""
              />
              <p>
                6 лет нам доверяют свое обучение <br /> <b>более 8000 </b>{" "}
                тренеров по всему миру
              </p>
            </div>
          </div>
          <div className="headerEnd">
            <button className="cursiBut">
              <a className="cursi" href="#">
                ВЫБРАТЬ КУРСЫ
              </a>
            </button>
            <div className="divTextP">
                Новогодняя акция: при покупке любого курса ты <br />
                получаешь <label>методичку фитнес-тренера на 809 страниц!</label>
              </div>
          </div>
        </div>
        <div className="headerRight">
          <img
            className="headerRightImage"
            src="https://thumb.tildacdn.com/tild6366-6533-4661-a339-323737343931/-/format/webp/photo.png"
            alt=""
          />
          <section className="headerLinks">
                <div className="detals">Лилия Линник <a href="https://www.instagram.com/linnik_fitness/">@linnik_fitness</a></div>
                <div className="detals">Основатель школы тренеров</div>
          </section>
        </div>
      </div>
    </div>
  );
}
