require 'sinatra'
require 'braintree'

Braintree::Configuration.environment = :sandbox
Braintree::Configuration.merchant_id = 'ffdqc9fyffn7yn2j'
Braintree::Configuration.public_key = 'qj65nndbnn6qyjkp'
Braintree::Configuration.private_key = 'a3de3bb7dddf68ed3c33f4eb6d9579ca'

get '/' do
  @client_token = Braintree::ClientToken.generate
  erb :index
end

post '/pay' do
  result = Braintree::Transaction.sale(
    amount: 10,
    payment_method_nonce: params[:payment_method_nonce],
  )

  if result.success?
    "Transaction ID: #{result.transaction.id}"
  else
    "We did something wrong"
  end
end
