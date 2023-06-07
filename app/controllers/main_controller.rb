class MainController < ApplicationController
  def index
    @user = User.new
  end

  def courses
    @user = User.new
  end

  def buy
    redirect_to courses_path, alert: 'Не достаточно денег на счете'
  end
end
