export default function Authors() {
  return (
    <div className="authors-container">
      <h2>Авторы <span>курсов</span></h2>
      <div className="authors-block">
        <div className="authors-item">
            <div className="authors-item-back" style={{background : `url(https://static3.tildacdn.com/tild3338-3766-4439-a437-653632616464/photo.png)`}}></div>
          <span>
            <h2>Лилия Линник</h2>
            <span>Автор сборника из 10 курсов и "Богатый фитнес-тренер"</span>
            <p>
              Основатель школы тренеров LINNIK FITNESS. Двукратная рекордсменка
              мира по жиму штанги лежа. Профессиональный тренер со стажем 7 лет.
              Обучила более 8000 специалистов по фитнесу
            </p>
          </span>
        </div>
        <div className="authors-item">
        <div className="authors-item-back" style={{background : `url(https://static3.tildacdn.com/tild3838-6266-4139-a161-666337613861/_.png)`}}></div>
          <span>
            <h2>Валерий Фомин</h2>
            <span>Автор курса по степ-аэробике</span>
            <p>
              Презентер Российских и международных фитнес-конвенций. Финалист
              конкурса International Fitness Open. Победитель конкурсе FitEXPO.
              Опыт работы 13 лет. Методист образовательных семинаров для
              инструкторов групповых программ.
            </p>
          </span>
        </div>
        <div className="authors-item">
        <div className="authors-item-back" style={{background : `url(https://static3.tildacdn.com/tild3863-6634-4133-a331-616634646363/fyz.png)`}}></div>
          <span>
            <h2>Анна Queen</h2>
            <span>Автор курса по йоге</span>
            <p>
              Инструктор йоги, сертифицированный международным йога альянсом США
              Генеральный секретарь Чешского Союза Самбо Член исполкома
              Европейской Федерации Самбо
            </p>
          </span>
        </div>
        <div className="authors-item">
        <div className="authors-item-back" style={{background : `url(https://static3.tildacdn.com/tild6137-3732-4930-b666-613663663639/_.png)`}}></div> 
          <span>
            <h2>Ирина Пожалостина</h2>
            <span>Преподаватель курса Нутрициолог с дипломом</span>
            <p>
              Ординатура по эндокринологии в ФГБУ «НМИЦ эндокринологи» МЗ РФ
              (ЭНЦ) г. Москва Переподготовка по программе Диетология
              Практикующий врач в МЦ «Доктор Плюс» г. Обнинск
            </p>
          </span>
        </div>
      </div>
      <button>ВЫБРАТЬ КУРСЫ</button>
    </div>
  );
}
