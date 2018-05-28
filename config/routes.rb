Rails.application.routes.draw do
    root 'home#index'
    get ':page' => 'static_pages#show'
    get ':namespace/:page' => 'static_pages#show_nested'
    get ':namespace/:subspace/:page' => 'static_pages#show_double_nested'
end
