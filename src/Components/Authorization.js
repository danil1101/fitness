export default function Authorization() {
    return(
        <div className="authorization">
            <form action="" autoComplete="off" name="" method="post">
            <h2>Регистрация и Авторизация</h2>
                <input type="text" placeholder="Введите ваш логин" />
                <input type="password" placeholder="Введите ваш Парол" />
                <div className="down_form">
                    <button>Регистрация</button>
                    <button>Уже Зарегистрирована</button> 
                </div>
            </form>
        </div>
    )
}