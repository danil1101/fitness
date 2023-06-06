import salemenu from "./salemenu"
import blogmenu from "./blogmenu"

export default function Bottomhome() {
    return(
        <div className="bottomHome">
            <h2>НОВАЯ <span>ПРОФЕССИЯ</span></h2>
            <p>Онлайн-курсы с нуля до работы</p>
            <div className="top_bottomHome">
                <div className="item_top_bottom top1">
                    <h3>БОГАТЫЙ</h3>
                    <h4>ФИТНЕС-ТРЕНЕР</h4>
                    <a href="#">Стань дипломированым <br /> фитнес-тренером с <br /> клиентами за 3 месяца</a>
                    <img src="https://thumb.tildacdn.com/tild6535-6536-4761-b433-306137633432/-/resize/240x/-/format/webp/s1200.png" alt="" />
                </div>
                <div className="item_top_bottom top2">
                <h3>НУТРИЦИОЛОГ</h3>
                    <a href="#" className="nut">Стань дипломированным специалистом по питанию и помогай клиентам в разработке рационов</a>
                    <img src="https://thumb.tildacdn.com/tild3030-3865-4434-b762-396466636662/-/resize/240x/-/format/webp/custom-basket-imgbbf.png" alt="" style={{ objectFit : 'contain', right : '0'}} />
                </div>
            </div>
            <h2>РАСПРОДАЖА</h2>
            <p className="rasprod">Онлайн-курсы по фитнесу и питанию <span style={{color : 'black' , fontWeight : '500'}}>со скидкой до 50%</span>. Кликай на картинку курса, чтобы узнать подробности</p>

            <div className="main_sale">
               {salemenu.map(sale => <div className="infoSale" key={sale.id}>
                <p>{sale.pBaz}</p>
                    <h3>{sale.h3Sale}</h3>
                    <h4>{sale.h4Sale}</h4>
                    <p>{sale.sertificate}</p>
                    <p  className="t_1">{sale.pSale}</p>
                    <div className="formPrice">
                        <h5>{sale.formerPrice}</h5>
                        <h6>{sale.price}</h6>
                    </div>
                    <img src={sale.imgSale} alt="" />
               </div>)}
               <div className="viewMoreSale">
                    <p><span className="spBlack">Более 12 курсов</span> по ежегодной распродаже <span className="spOrange">от 1990 RUB</span> с выдачей сертификатов</p>
                    <a href="#">СМОТРЕТЬ ВСЕ</a>
               </div>
            </div>



            <h2>БЕСПЛАТНО</h2>
            <p className="textFree">Узнай все, что нужно, об интересующей тебя профессии и обрети базовые знания на наших онлайн-практикумах</p>
            <div className="start_cont">
                <div className="content_start_count">
                    <h2>БЫСТРЫЙ <span>СТАРТ</span></h2>
                    <p>Практикум для фитнес-тренеров и тех, кто хочет им стать.</p>
                    <img src="https://thumb.tildacdn.com/tild6539-3666-4731-a131-303662376537/-/resize/90x/-/format/webp/noroot.png" alt="" />
                </div>
                <div className="content_start_count">
                    <h2 className="h2Count" style={{fontSize : '28px'}}><span>КУХНЯ</span>НУТРИЦИОЛОГА</h2>
                    <p>Практикум для нутрициологов и тех, кто хочет им стать. 8 видео уроков</p>
                    <img src="https://thumb.tildacdn.com/tild6261-3835-4435-b063-323634353933/-/resize/120x/-/format/webp/promo-main.png" alt="" />
                </div>
            </div>
            <h2  className="b_2">БЛОГ</h2>
            <p className="textFree">Образовательные статьи и лонгриды для тренеров и нутрициологов. Ты узнаешь много интересного</p>
            <div className="blog b_1">
                {blogmenu.map(item => <div key={item.id}>
                    <h3>{item.h2Blog}</h3>
                    <p className="p_1">{item.pBlog}</p>
                    <img src={item.imgBlog} alt="" />
                </div>)}
            </div>
        </div>
    )
}