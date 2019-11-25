Rails.application.routes.draw do
  devise_for :users
  root "landing#show"
  resource :dashboard, only: [:show]
  resources :parcels, only: [:new]
  resources :shipments, only: [:create, :show, :new]
  resource :profile, only: [:update]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
