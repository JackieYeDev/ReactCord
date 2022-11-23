Rails.application.routes.draw do
  resources :messages
  resources :subscriptions
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get "/me", to: "users#show"
  get "/channels", to: "channels#index"
  get "/user/channels", to: "subscriptions#channel_list"
  get "/channels/:id/user", to:"subscriptions#user_list"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  mount ActionCable.server => '/cable'
  resources :channels do
    resources :messages, only: [:index, :create]
  end
end
