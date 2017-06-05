Rails.application.routes.draw do
  
  root to: "chatrooms#index"

  devise_for :users
  devise_for :installs
  resources :chatrooms do 
    resource :chatroom_users
    resources :messages
  end
  
  # mount ActionCable.server, at: '/cable'
end
