Rails.application.routes.draw do
  get '/api' => 'application#index', defaults: { format: :json }
   post '/api' => 'application#index', defaults: { format: :json }
end
