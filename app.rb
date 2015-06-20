require 'sinatra'
require 'braintree'

# TODO: Add API Keys

get '/' do
  # TODO: Create client token
  erb :index
end

post '/pay' do
  # TODO: Create sale
end
