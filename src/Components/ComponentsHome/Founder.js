export default function Founder() {
  let stylesss = {
    width: "50%",
    height: "10%",
    color: "#ad7e1f",
    fontSize: "40px",
    display: "none",
    position: " absolute",
    left: "55%",
    top: "15%",
  };
  return (
    <div className="sectionFounder">
      <h2>ОСНОВАТЕЛЬ ШКОЛЫ</h2>
      <div className="content_section_founder">
        <img
          src="https://thumb.tildacdn.com/tild3366-3964-4965-b466-616232306363/-/resize/477x/-/format/webp/__.png"
          alt=""
        />
        <h3 className="chereva" style={stylesss}>
          Лилия Линник
        </h3>
        <div className="item_content_founder">
          <h3>Лилия Линник</h3>
          <p>
            <span>За 2 года</span> выросла с инструктора тренажерного зала до
            управляющего фитнес-департаментом и создателя школы фитнеса
          </p>
          <p>
            Профессиональный тренер со стажем <span>8 лет</span>
          </p>
          <p>
            Разработала <span>систему стажировки</span> фитнес-тренеров для
            московской сети фитнес-клубов FitnessON
          </p>
          <p>
            Провела <span>более 80 семинаров</span> для тренеров в России{" "}
          </p>
          <p>
            Сотрудничала <span>со звездами фитнеса</span>: Станислав Линдовер,
            Дмитрий Яковина, Павел Баранов, Андрей Скоромный
          </p>
          <p>
            Вложила в образование более <span>1,2 млн рублей</span>
          </p>
          <p>
            Двукратная <span>рекордсменка мира</span> по жиму штанги лежа и
            мастер спорта
          </p>
          <p>Обучает с 2017 года</p>
        </div>
      </div>
      <a href="#">ХОЧУ УЧИТЬСЯ У ЛИЛИ</a>
    </div>
  );
}
