class MainController < ApplicationController
  def index
    @user = User.new
    @page_title = "Главная"
  end

  def courses
    @user = User.new
    @page_title = "Курсы"
  end

  def buy
    redirect_to courses_path, alert: 'Не достаточно денег на счете'
  end
end
