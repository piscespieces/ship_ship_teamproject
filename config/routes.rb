Rails.application.routes.draw do
  devise_for :users
  root "landing#show"
  get "carriers/show"
  resource :dashboard, only: [:show]
  resources :parcels, only: [:new]
  resources :shipments, only: [:create, :show, :new]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
