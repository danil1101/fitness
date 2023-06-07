class SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])
    # finds existing user, checks to see if user can be authenticated
    if user.present? && user.authenticate(params[:password])
      # sets up user.id sessions
      session[:user_id] = user.id
      redirect_to cabinet_path, notice: 'Успешная авторизация'
    else
      flash.now[:alert] = 'Неверный логин или пароль'
      redirect_to root_path, alert: 'Неверный логин или пароль'
    end
  end
  def destroy
    # deletes user session
    session[:user_id] = nil
    redirect_to root_path, notice: 'Выход'
  end
end