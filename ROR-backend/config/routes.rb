Rails.application.routes.draw do
   # Users
   resources :albums, :only => [:show, :create, :update, :destroy, :edit], defaults: { format: 'json' }, constraints: { format: 'json' }


   resources :users, :only => [:show, :create, :update, :destroy, :edit], defaults: { format: 'json' }, constraints: { format: 'json' }

   # Users
  resources :purchases, :only => [:show, :create, :update, :destroy, :edit], defaults: { format: 'json' }, constraints: { format: 'json' }
  end
