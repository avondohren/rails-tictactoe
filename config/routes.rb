RailsTictactoe::Application.routes.draw do
  root to: 'logins#new'
  resources :users
  resources :games, :except => [:new, :edit]
  resources :logins, :only => [:new, :create, :destroy]
end
