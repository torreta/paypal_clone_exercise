Rails.application.routes.draw do
  
  # loguear y token
  post 'user_token' => 'user_token#create'
  
  # usuarios
  resources :users

  # password reset
  post 'passwords/forgot', to: 'passwords#forgot'
  # post 'password/reset', to: 'password#reset'
  # post 'password/change', to: 'password#change'
end
