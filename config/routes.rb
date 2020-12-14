Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :movies, only: [:index, :show]
    resources :genres, only: [:index, :show]
    resources :my_lists, only: [:index, :create, :destroy]
  end

end
