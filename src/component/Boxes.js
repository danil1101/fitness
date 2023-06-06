export default function Boxes() {
  return (
    <div className="box-container">
      <h2>Выбери 1 или несколько курсов, которые хочешь пройти.</h2>
      <div className="checkbox-blockes">
        <div className="checkbox-item">
          <span>
            <input type="checkbox" />
            <p>ЙОГА СЕРИАЛ от Анны Queen. Лайт</p>
          </span>
          <p>1 990 руб.</p>
        </div>
        <div className="checkbox-item">
          <span>
            <input type="checkbox" />
            <p>Курс "Миофасциальный релиз"ЙОГА СЕРИАЛ от Анны Queen. Лайт</p>
          </span>
          <p>1 990 руб.</p>
        </div>
        <div className="checkbox-item">
          <span>
            <input type="checkbox" />
            <p>Сборник гайдов на 3 месяца</p>
          </span>
          <p>1 990 руб.</p>
        </div>
        <div className="checkbox-item">
          <span>
            <input type="checkbox" />
            <p>Сборник гайдов на 3 месяца</p>
          </span>
          <p>2 490 руб.</p>
        </div>
        <div className="checkbox-item">
          <span>
            <input type="checkbox" />
            <p>Мастер женского фитнеса</p>
          </span>
          <p>1 990 руб.</p>
        </div>
        <div className="checkbox-item">
          <span>
            <input type="checkbox" />
            <p>ВСЕ О ТЕЛЕ И ДВИЖЕНИИ 2.0</p>
          </span>
          <p>2 990 руб.</p>
        </div>
        <div className="checkbox-item">
          <span>
            <input type="checkbox" />
            <p>КУРС "ИНСТРУКТОР ПО СТРЕТЧИНГУ"</p>
          </span>
          <p>2 990 руб.</p>
        </div>
        <div className="checkbox-item">
          <span>
            <input type="checkbox" />
            <p>Методист тренировочных программ NEW</p>
          </span>
          <p>2 990 руб.</p>
        </div>
        <div className="checkbox-item">
          <span>
            <input type="checkbox" />
            <p>Онлайн-курс "Нутрициолог" с выдачей сертификата. Распродажа</p>
          </span>
          <p>2 990 руб.</p>
        </div>
        <div className="checkbox-item">
          <span>
            <input type="checkbox" />
            <p>Курс "Онлайн-тренер". Тариф Сам</p>
          </span>
          <p>
            <span style={{ textDecoration: "line-through" }}>7 900 руб. </span>3
            900 руб.
          </p>
        </div>
        <div className="checkbox-item">
          <span>
            <input type="checkbox" />
            <p>Инструктор по степ-аэробике</p>
          </span>
          <p>4 900 руб.</p>
        </div>
        <div className="checkbox-item">
          <span>
            <input type="checkbox" />
            <p>Инструктор тренажерного зала</p>
          </span>
          <p>8 390 руб.</p>
        </div>
        <div className="checkbox-item">
          <span>
            <input type="checkbox" />
            <p>Сборник курсов</p>
          </span>
          <p>19 990 руб.</p>
        </div>
      </div>
      <div className="social-block">
            <input type="text" placeholder="Введите ваш эл. адрес"/>
            <input type="text" placeholder="Введите ваше имя"/>
            <input type="text" placeholder="Введите ваш телефон"/>
            <button>КУПИТЬ</button>
      </div>
      <label>
        <input type="checkbox" checked/>
        <p>Я согласен на обработку моих персональных данных в соответствии с <a href="#">Условиями</a></p>
      </label>
    </div>
  );
}
