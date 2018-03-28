Rails.application.routes.draw do
  post '/pages/query'
  resources :pages do
    get :tag
  end
  resources :tags, only: :index
end
