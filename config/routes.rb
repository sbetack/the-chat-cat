Rails.application.routes.draw do
  
  root to: "chatrooms#index"

  devise_for :users
  devise_for :installs
  resources :chatrooms
  
end
