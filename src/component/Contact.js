export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-text">
        <h2>
          <span>Лилия Линник</span> всегда на связи и готова помочь
        </h2>
        <p>
          Если у вас возникли вопросы, напишите в любой мессенджер или заполните
          форму
        </p>
        <label>
          <input type="radio" name="namemy" checked />
          <p>Присоединяйся в мой телеграмм-канал "База знаний LINNIK FITNESS" где я публикую статьи для фитнес-тренеров и любителей – о женском фитнесе, рациональном питании и поиске клиентов
          </p>
        </label>
        <button>Присоединиться</button>
        <label>
          <input type="radio" name="namemy" checked />
          <p>Если остались вопросы - напиши нам!</p>
        </label>
        <label>
          <button>Написать в Whatsapp</button>
          <p>Лия</p>
        </label>
      </div>
      <div className="contact-phone">
        <img
          src="https://static.tildacdn.com/tild6566-6537-4661-b639-306233396265/photo.png"
          alt=""
        />
      </div>
    </div>
  );
}
