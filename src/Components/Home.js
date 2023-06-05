import Bottomhome from "./ComponentsHome/Bottomhome";
import Founder from "./ComponentsHome/Founder";
import Results from "./ComponentsHome/Results";
import Reviews from "./ComponentsHome/Reviews";

export default function Home() {
    return(
        <div className="home">
            <header>
                <div className="left_header">
                    <div className="logo_top_header">
                        <img src="https://thumb.tildacdn.com/tild3366-3938-4861-b338-366532626564/-/resize/180x/-/format/webp/__2.png" alt="" className="logo" />
                        <button>Диплом переподготовки</button>
                        <button>Сертификат</button>
                    </div>
                    <div className="h1_header">
                        <h3>Школа фитнес-тренеров</h3>
                        <h2>LINNIK FITNESS</h2>
                    </div>
                    <p>Взращиваем профессионалов и помогаем зарабатывать <span>на любимом деле</span></p>
                    <div className="cont_header_buttons">
                        <span>Тренажерный зал</span>
                        <span>Стретчинг</span>
                        <span>Онлайн-тренер</span>
                        <span>Фитнес-тренер</span>
                        <span>Нутрициолог</span>
                    </div>
                </div>
                <div className="right_header">
                    <img src="https://thumb.tildacdn.com/tild6635-3365-4763-b334-666131633866/-/resize/468x/-/format/webp/photo.png" alt="" />
                </div>
            </header>
            <Reviews />
            <Results />
            <Founder />
            <Bottomhome />
        </div>
    )
}