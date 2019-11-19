Rails.application.routes.draw do
  devise_for :users
  root "dashboard#show"
  get 'landing/show', to: 'landing#show'
  resources :shipments, only: [:create, :show, :new]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
