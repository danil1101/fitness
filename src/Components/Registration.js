export default function Registration() {
    return (
        <div className="fromRegistartion">
            <form action="" autoComplete="off" name="" method="post">
                <h2>Регистрация и Авторизация</h2>
                <input type="text" placeholder="Введите ваш логин" />
                <input type="password" placeholder="Введите ваш Парол" />
                <input type="email" placeholder="Введите ваш майл" />
                <div className="down_form">
                    <button>Регистрация</button>
                    <button>Уже Зарегистрирована</button> 
                </div>
            </form>
        </div>
    )
}