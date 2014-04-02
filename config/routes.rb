RailsTictactoe::Application.routes.draw do
  resources :users
  resources :games
  resources :logins, :only => [:new, :create, :destroy]
end
