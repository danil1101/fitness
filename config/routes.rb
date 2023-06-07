Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "main#index"

  get 'courses', to: 'main#courses'
  get 'buy', to: 'main#buy'

  post 'sign_up', to: 'registration#create'
  post 'sign_in', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  get 'cabinet', to: 'cabinet#index'
end
