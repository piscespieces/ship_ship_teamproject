Rails.application.routes.draw do
  get 'landing/show', to: 'landing#show'
  # get 'hello_world', to: 'hello_world#index'
root "dashboard#show"
resources :shipments, only: [:create, :show, :new]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
