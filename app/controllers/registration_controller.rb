class RegistrationsController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      # stores saved user id in a session
      session[:user_id] = @user.id
      redirect_to cabinet_path, notice: 'Successfully created account'
    else
      redirect_to root_path
    end
  end
  private
  def user_params
    # strong parameters
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end