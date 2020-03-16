class User < ApplicationRecord
    has_secure_password

    
  def self.from_token_request(request)
    puts("paso por el overryde")
  end
end