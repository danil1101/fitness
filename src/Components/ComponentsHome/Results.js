import { Link } from "react-router-dom";

export default function Results() {
  return (
    <div className="sectionResults">
      <h2>РЕЗУЛЬТАТЫ УЧЕНИКОВ</h2>
      <div className="content_section_results">
        <div className="item_content_results">
          <img
            src="https://thumb.tildacdn.com/tild3231-6639-4064-b933-653637383931/-/cover/169x169/center/center/-/format/webp/360641449_241216508_.jpg"
            alt=""
          />
          <div className="info_results">
            <h3>Анастасия Семенцова</h3>
            <h4>Ростов-на-Дону @vodolusha</h4>
            <p>
              До курса: мама в декрете, заработок 0₽ <span>После курса:</span>{" "}
              персональный тренер клуба Алекс Фитнес, доход 75 000₽ Куратор
              LINNIK FITNESS
            </p>
          </div>
        </div>
        <div className="item_content_results">
          <img
            src="https://thumb.tildacdn.com/tild6162-6132-4861-b132-666263396131/-/cover/169x169/center/center/-/format/webp/photo_2022-02-09_134.jpeg"
            alt=""
          />
          <div className="info_results">
            <h3>Марина Гонотова</h3>
            <h4>Азов @makka_m_g</h4>
            <p>
              До курса: декрет, вес 100 кг <span>После курса:</span>{" "}
              онлайн-тренер, вес 60 кг, доход 60 000₽, открыла свою студию
              фитнеса
            </p>
          </div>
        </div>
        <div className="item_content_results">
          <img
            src="https://thumb.tildacdn.com/tild6231-3261-4437-a636-666136386635/-/cover/169x169/center/center/-/format/webp/360641449_117953370_.jpg"
            alt=""
          />
          <div className="info_results">
            <h3>Анатолий Хвастунов</h3>
            <h4>Подольск @coach_tolian</h4>
            <p>
              До курса: тренер в зале, заработок 14 000₽{" "}
              <span>После курса:</span> повысили до старшего тренера, доход 140
              000₽
            </p>
          </div>
        </div>
        <div className="item_content_results">
          <img
            src="https://thumb.tildacdn.com/tild3063-3566-4139-a364-316332393733/-/cover/169x169/center/center/-/format/webp/photo_2022-02-08_162.jpeg"
            alt=""
          />
          <div className="info_results">
            <h3>Елена Яссиевич</h3>
            <h4>Краснодар @yassievich</h4>
            <p>
              До курса: тренер, доход 20 000₽ <span>После курса:</span> прошла
              отбор в топовый клуб, вышла на заработок 50 000₽
            </p>
          </div>
        </div>
        <div className="item_content_results">
          <img
            src="https://thumb.tildacdn.com/tild6563-6339-4766-a230-316462333565/-/cover/169x169/center/center/-/format/webp/photo_2022-02-08_155.jpeg"
            alt=""
          />
          <div className="info_results">
            <h3>Валерия Залевская</h3>
            <h4>Донецк @zalevskaya_fit</h4>
            <p>
              До курса: детский тренер <span>После курса:</span> начала тренировать взрослых
              персонально и в группе; с нуля запустила онлайн-зал, на котором
              зарабатывает 25 000 рублей, работая 3 часа в неделю
            </p>
          </div>
        </div>
        <div className="item_content_results">
        <img
            src="https://thumb.tildacdn.com/tild3938-6532-4564-a435-643935646234/-/cover/169x169/center/center/-/format/webp/photo_2022-08-02_104.jpeg"
            alt=""
          />
          <div className="info_results">
            <h3>Элишад Мусаев</h3>
            <h4>ДМосква @el.noise_</h4>
            <p>
            Устроился в фитнес-клуб Cky Fitness Митино, вышел на доход 250 000 рублей ежемесячно
            </p>
          </div>
        </div>
        <div className="item_content_results">
        <img
            src="https://thumb.tildacdn.com/tild6461-3532-4161-a263-383737376135/-/cover/169x169/center/center/-/format/webp/photo_2022-08-02_105.jpeg"
            alt=""
          />
          <div className="info_results">
            <h3>Анастасия Широкова</h3>
            <h4>@parshulia</h4>
            <p>
            Похудела на 34 кг, нашла 26 клиентов, вышла на доход 70 000 рублей, работая онлайн и в зале в небольшом городке
            </p>
          </div>
        </div>
        <div className="item_content_results">
        <img
            src="https://thumb.tildacdn.com/tild6439-3632-4237-b165-663130306635/-/cover/169x169/center/center/-/format/webp/photo_2022-08-02_105.jpeg"
            alt=""
          />
          <div className="info_results">
            <h3>Марина Рустамова</h3>
            <h4>@rustamowa_fitness</h4>
            <p>
            Тренирует в зале и онлайн. 20 клиентов, заработок 45 000 рублей. Начала вести блог, с которого регулярно приходят новые клиенты
            </p>
          </div>
        </div>
      </div>
      <a href="/SectionTwo">ВЫБРАТЬ КУРСЫ</a>
      {/* <Link to="/SectionTwo">ВЫБРАТЬ КУРСЫ</Link> */}
    </div>
  );
}
