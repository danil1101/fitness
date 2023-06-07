class CabinetController < ApplicationController
  before_action :require_user_logged_in!
  def index
    @page_title = "Кабинет"
  end

end
