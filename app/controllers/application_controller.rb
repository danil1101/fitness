class ApplicationController < ActionController::Base
  before_action :set_current_user
  def set_current_user
    # finds user with session data and stores it if present
    Current.user = User.find_by(id: session[:user_id]) if session[:user_id]
  end
  def require_user_logged_in!
    # allows only logged in user
    redirect_to root_path, alert: 'Вы должны быть авторизованы' if Current.user.nil?
  end
end
