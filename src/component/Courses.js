import { blogs } from "./blogs";
export default function Courses() {
  return (
    <div className="courses-container">
      <div className="cube-courses-container">
      <div className="cube-courses">
        <div
          className="course"
          style={{ "--i": 1, background: blogs[10].back }}
        >
          <img src={blogs[10].picture} alt="" />
          <div className="circle"></div>
          <h2>{blogs[10].name}</h2>
        </div>
        <div className="course" style={{ "--i": 2, background: blogs[7].back }}>
          <img src={blogs[7].picture} alt="" />
          <div className="circle"></div>
          <h2>{blogs[7].name}</h2>
        </div>
        <div
          className="course"
          style={{ "--i": 3, background: blogs[6].back }}
        >
            <img src={blogs[6].picture} alt="" />
            <div className="circle"></div>
            <h2>{blogs[6].name}</h2>
        </div>
        <div
          className="course"
          style={{ "--i": 4, background: blogs[11].back }}
        >
            <img src={blogs[11].picture} alt="" />
            <div className="circle"></div>
            <h2>{blogs[11].name}</h2>
        </div>
        <div
          className="course"
          style={{ "--i": 5, background: blogs[0].back }}
        >
            <img src={blogs[0].picture} alt="" />
            <div className="circle"></div>
            <h2>{blogs[0].name}</h2>
        </div>
      </div>
      </div>
      <div className="course-info">
        <h2><span>Сборник</span> всех курсов</h2>
        <div className="times">
                <img
                  src="https://static.tildacdn.com/tild3931-3438-4433-a366-313264656530/chronometer.svg"
                  alt=""
                />
                <p>111 уроков</p>
                <img
                  src="https://static.tildacdn.com/tild6635-3435-4735-b236-666239643261/clock.svg"
                  alt=""
                />
                <p>47ч.</p>
                <img
                  src="https://thumb.tildacdn.com/tild3437-6239-4563-a636-666133306437/-/format/webp/noroot.png"
                  alt=""
                />21 сертификат
                <p></p>
            </div>
            <p>Получить доступ сразу ко всем курсам на 6 месяцев Изучив все материалы - можете смело устраиваться в любой зал вашего города или создавать свои инфопродукты для работы и заработка в онлайн</p>
            <button>Подробнее</button>
      </div>
    </div>
  );
}
