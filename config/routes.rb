Rails.application.routes.draw do
  post '/pages/query'
  post '/pages/tag'
  resources :tags, only: :index
end
