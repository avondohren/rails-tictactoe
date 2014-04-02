RailsTictactoe::Application.routes.draw do
  resources :users
  resources :games, :except => [:new, :edit]
  resources :logins, :only => [:new, :create, :destroy]
end
