RailsTictactoe::Application.routes.draw do
  get "transaction/index"

  get "transaction/show"

  get "transaction/new"

  get "transaction/create"

  get "transaction/edit"

  get "transaction/update"

  get "transaction/destroy"

  get "account/index"

  get "account/show"

  get "account/new"

  get "account/create"

  get "account/edit"

  get "account/update"

  get "account/destroy"

  get "user/index"

  get "user/show"

  get "user/new"

  get "user/create"

  get "user/edit"

  get "user/update"

  get "user/destroy"

  root to: 'logins#new'
  resources :users
  resources :games, :except => [:new, :edit]
  resources :logins, :only => [:new, :create, :destroy]
end
