class RegistrationController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      # stores saved user id in a session
      session[:user_id] = @user.id
      redirect_to root_path, notice: 'Успешное создание аккаунта, теперь можете авторизоваться'
    else
      redirect_to root_path, alert: 'Неверный емейл или пароли не совпадают'
    end
  end
  private
  def user_params
    # strong parameters
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end